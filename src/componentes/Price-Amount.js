import React from "react";
import '../hojas_de_estilo/Price-Amount.css'

function Price_Amount(props){
    return(
        <div>
            <h1 className="amount">{props.cantidad}</h1>
            <h1 className="pt">{props.precio}</h1>
            <p className="precio">Price</p>
            
        </div>
    )
}
export default Price_Amount;