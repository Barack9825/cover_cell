import React from "react";
import '../hojas_de_estilo/PayItem.css'

function PayItem(props ){
    return(
        <div className="PayItem row">
            <div className="column"><p></p></div>    
            <div className="name column">
                <p>Subtotal</p>
                
                <p>Shipping</p>
                
                <p>Total amount</p>
                
            </div>
            <div className="value column">
                <p>{props.subtotal}</p>
                <p>{props.shipping}</p>
                <p>{props.total}</p>
            </div>
        </div>
    )
}
export default PayItem;