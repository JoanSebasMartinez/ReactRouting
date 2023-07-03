import React from "react";
import "./AgregarBrigadista.css"
import {useParams} from 'react-router-dom';

function InfoBrigadista(){
    let {id} = useParams();
return(
    <p>Informacion del Brigadista {id}</p>
);
}

export default InfoBrigadista;