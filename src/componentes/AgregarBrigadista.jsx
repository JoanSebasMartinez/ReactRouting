import React from "react";
import "./AgregarBrigadista.css"

function AgregarBrigadista(){
return(
    <div className="containerInputs">
    <h1>Agregar Brigadista</h1>
    <input type="text" id="name"></input>
    <a href="/brigadista"><button>Lista de Brigadistas</button></a>
    </div>
);
}

export default AgregarBrigadista;