import React from "react";
import PropTypes from "prop-types";

export const Tarea = ({ value, index, handleDelete, handleToggle }) => {
  return (
    <li key={value.id} className="list-group-item">
      <p
        className={`${value.done && "complete"}`}
        onClick={() => handleToggle(value.id)}
      >
        {index + 1} - {value.desc}{" "}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(value.id)}>
        Borrar
      </button>
    </li>
  );
};
Tarea.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
