import React from "react";
import "./ListaBrigadista.css";
import {Link, useNavigate, useParams} from 'react-router-dom';



function ListaBrigadistas(){

return(
    <div className="containerList">
    <ul>
        <li>Brigadista 1<button >Info</button></li>
        <li>Brigadista 2<button >Info</button></li>
    </ul>
    <Link to='/new'>Agregar Brigadista</Link>
    </div>
);
}

export default ListaBrigadistas;