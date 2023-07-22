import React from "react";
import '../hojas_de_estilo/Option.css'

function Option(props) {

    return (
        <div
            className="Option"
            onClick={props.ManejarClick}>
            {/* <img
            className="compras"
            src={require('../assets/compras.jpg')}
            alt='imagen de covers'
            /> */}
            <h1 className="optionText">
                {props.text}
            </h1>

        </div>
    );
}

export default Option;