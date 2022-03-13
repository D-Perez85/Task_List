import React from "react";
import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";

export const AddTarea = ({ handleAddTarea }) => {
  const [{ description }, handleChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTarea = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    handleAddTarea(newTarea);
    reset();
  };

  return (
    <>
      <h4>Agregar Tarea</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={description}
          name="description"
          className="form-control"
          placeholder="Ingrese aqui su tarea..."
        />
        <button type="submit" className="btn btn-outline-primary margin-top">
          Agregar
        </button>
      </form>
    </>
  );
};

AddTarea.propTypes = {
  handleAddTarea: PropTypes.func.isRequired,
};
