import React, { useEffect, useReducer } from "react";
import { AddTarea } from "./components/AddTarea";
import { useForm } from "./hooks/useForm";
import { reducer } from "./reducer";
import "./styles.css";

const App = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("tareas")) || [];
  };
  const [tareas, dispatch] = useReducer(reducer, [], init);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const handleAddTarea = (newTarea) =>{
    dispatch({
     type: "add",
     payload: newTarea,
   });
  }; 
  
  const handleDelete = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggle = (id) =>{
    const action ={
      type: "toggle",
      payload: id
    }; 
    dispatch(action)
  }

  return (
    <div>
      <h1>Lista de pendientes ({tareas.length}) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {tareas.map((value, index) => {
              return (
                <li className="list-group-item">
                  <p
                    className={`${value.done && "complete"}`}
                    onClick={() => handleToggle(value.id)}>
                    {index + 1} - {value.desc} </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(value.id)}>
                    Borrar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-5">
           <AddTarea handleAddTarea={handleAddTarea}/>
        </div>
      </div>
    </div>
  );
};

export default App;
