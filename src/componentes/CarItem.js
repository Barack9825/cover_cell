import React from "react";
import Price_Amount from "./Price-Amount";

function CarItem(props) {
    return (
        <div className="carItem-container">
            <div className="encabezamiento">
                <img 
                src={require(`../assets/${props.picture}`)}
                alt='imagen de cover'
                />
                <p>{props.modelo}</p>
            </div>
            <div className="contenido">
                <Price_Amount
                cantidad={props.cantidad}
                precio={props.precio}/>
            </div>
            <div className="foot"></div>
        </div>)
}

export default CarItem