import React from "react";
import '../hojas_de_estilo/payButton.css'



function PayButton(props) {
    
    return(

        <div className="buttonContainer">
            <button 
            className= {`buttonPay ${props.typeButton}`}
            onClick={props.ManejarClick}>
            <p className="text1">{props.text1}</p>
            <p className="text2">{props.text2}</p>
                
            </button>
           
        </div>
    );

    
}
export default PayButton