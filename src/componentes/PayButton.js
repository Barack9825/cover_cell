import React from "react";

import '../hojas_de_estilo/payButton.css'
import PBI from "./Pay-Button-Inner";

function PayButton(props) {
    var x=5;
    
    return(
        
        <div className="buttonContainer">
            <button className= {`buttonPay ${props.style}`}>
                <PBI 
                style={props.style}
                text={props.text}/>
            </button>
           
        </div>
    );

    
}
export default PayButton