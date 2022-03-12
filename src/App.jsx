import React from "react"; 
import "./styles.css";


const App = ()=> {
  return (
    <div>
      <h1>Lista de Tareas </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
           <li>A</li>
           <li>B</li>
           <li>C</li>
          </ul>
        </div>
        <div className="col-5">
            <h4>Agregar Tarea</h4>
            <hr />
             <form>
                <input type="text" name="description" placeholder="Ingrese la tarea pendiente..." className="form-control" autoComplete="off" />
                <button type="submit" className="btn btn-outline-primary margin-top">Agregar</button>
            </form>
            </div>
      </div>
    </div>
  );
}

export default App;
