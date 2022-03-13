import React from "react";

const Tarea = ({ value, index, handleDelete, handleToggle }) => {
  return (
    <li key={value.id} className="list-group-item">
      <p
        className={`${value.done && "complete"}`}
        onClick={() => handleToggle(value.id)}
      >
        {index + 1} - {value.desc}{" "}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(value.id)}>
        Delete
      </button>
    </li>
  );
};
export default Tarea;
