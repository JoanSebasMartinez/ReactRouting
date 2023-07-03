import React from "react";
import "./AgregarBrigadista.css"
import {useNavigate} from 'react-router-dom';

function AgregarBrigadista(){
    let navigate = useNavigate();
return(
    <div className="containerInputs">
    <h1>Agregar Brigadista</h1>
    <input type="text" id="name"></input>
    <button onClick={() => navigate("/")}>Lista de Brigadistas</button>
    </div>
);
}

export default AgregarBrigadista;