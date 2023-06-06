import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import '../hojas_de_estilo/payButton.css'

function PayButton(props) {
    return(
        <div className="buttonContainer">
            <button className={props.style}>
                <AiOutlineShoppingCart/> {props.text}
            </button>
        </div>
    );
}
export default PayButton