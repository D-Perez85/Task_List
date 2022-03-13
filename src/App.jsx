import React, { useEffect, useReducer } from "react";
import { AddTarea } from "./components/AddTarea";
import {ListaTareas} from "./components/ListaTareas";
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
  const handleToggle = (id) =>{ 
    dispatch({
      type: "toggle", 
      payload: id
    })
  }
  const handleDelete = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };
  return (
    <div>
      <h1>Lista de pendientes ({tareas.length}) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
           <ListaTareas tareas={tareas} 
           handleDelete={handleDelete} handleToggle={handleToggle}
           />
        </div>
        <div className="col-5">
           <AddTarea handleAddTarea={handleAddTarea}/>
        </div>
      </div>
    </div>
  );
};
export default App;
