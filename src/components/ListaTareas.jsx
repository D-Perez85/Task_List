import React from "react"; 
import Tarea from "./Tarea";

export const ListaTareas = ({ tareas, handleDelete, handleToggle }) =>{
    return (
        <ul className="list-group list-group-flush">
      {tareas.map((value, index) => {
        return (
          <Tarea
            key={value.id}
            value={value}
            index={index}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        );
      })}
    </ul>
    )
}

