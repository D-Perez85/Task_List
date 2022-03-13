import React, { useEffect, useReducer } from "react";
import { useForm } from "./hooks/useForm";
import { reducer } from "./reducer";
import "./styles.css";

const App = () => {
  const init = () =>{
    return JSON.parse(localStorage.getItem('tareas')) || []; 
  }
  const [tareas, dispatch] = useReducer(reducer, [], init);
  const [{ description }, handleChange, reset] = useForm({
    description: "",
  });

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas))
  },[tareas]); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTarea = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTarea,
    };
    dispatch(action);
    reset();
  };




  return (
    <div>
      <h1>Lista de pendientes </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {tareas.map((value, index) => {
              return (
                <li className="list-group-item">
                  <p className="text-center">
                    {index + 1} - {value.desc}
                  </p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Tarea</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={description}
              placeholder="Ingrese aqui su tarea..."
              className="form-control"
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn btn-outline-primary margin-top"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
