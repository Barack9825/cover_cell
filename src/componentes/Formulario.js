import React from "react";
import '../hojas_de_estilo/Formulario.css'

function Formulario(props) {
    const entries = props.entries.map((element, index) => {
        return (
            <div
                key={index}
                className='Campo'>

                <label className="etiqueta"> {element}</label>

                <input
                    className="entrada"
                    type text
                    autoFocus={index === 0}></input>

            </div>

        )
    });

    return (
        <form className="Registros">
            {entries}
            <button className="buttonReg">
                    {props.text}
                </button>
        </form>
    );
}

export default Formulario;