import React from "react";
import "./ListaBrigadista.css";



function ListaBrigadistas(){
return(
    <div className="containerList">
    <ul>
        <li>Brigadista 1</li>
        <li>Brigadista 2</li>
    </ul>
    <a href="/new"><button>Agregar Brigadista</button></a>
    </div>
);
}

export default ListaBrigadistas;