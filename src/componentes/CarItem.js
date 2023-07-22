import React from "react";
import Price_Amount from "./Price-Amount";
import '../hojas_de_estilo/CarItem.css'
import '../hojas_de_estilo/Table.css'
import { AiFillCloseCircle } from "react-icons/ai";

function CarItem(props) {
    return (
        <div className="carItem-container row">
            <div className="Imagen_modelo encabezamiento">
                <img
                className="picture" 
                src={require(`../assets/${props.picture}`)}
                alt='imagen de cover'
                />
                <p className="modelo">{props.modelo}</p>
                <vr></vr>
            </div>
            <div className="contenido datos">
                <Price_Amount
                cantidad={props.cantidad}
                precio={props.precio}/>
            </div>
            <div className= "encabezamiento eliminar"><AiFillCloseCircle onClick={props.ManejarClick}/></div>
            
        </div>
        )
}

export default CarItem