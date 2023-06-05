import React from "react";
import '../hojas_de_estilo/payButton.css'

function PayButton(props) {
    return(
        <div className="buttonContainer">
            <button className={props.style}>
                {props.text}
            </button>
        </div>
    );
}
export default PayButton