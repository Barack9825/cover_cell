import React from "react";
import '../hojas_de_estilo/Option.css'

function Option(props) {

    return (
        <div
            className="Option"
            onClick={props.ManejarClick}>

            <h1 className="optionText">
                {props.text}
            </h1>

        </div>
    );
}

export default Option;