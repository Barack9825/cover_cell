import React from "react";
import '../hojas_de_estilo/Price-Amount.css'

function Price_Amount(props){
    switch (props.page){
        case 1:
            return(
                <div>
                    <h1 className="amount">{props.cantidad}</h1>
                    <h1 className="pt">{props.precio}</h1>
                    <p className="precio">Price</p>
                </div>
            )
        case 3:
            return(
                <div>
                    <h1 className="Pay">{props.Pay}</h1>
                    <h1 className="Cancel">{props.Cancel}</h1>
                </div>
            )
    }
    
            
        
}
export default Price_Amount;