import React from "react";
import '../hojas_de_estilo/payButton.css'
import PBI from "./Pay-Button-Inner";


function PayButton(props) {
    
    return(

        <div className="buttonContainer">
            <button 
            className= {`buttonPay ${props.style}`}
            onClick={props.ManejarClick}>
                <PBI 
                style={props.style}
                text={props.text}
                text1={props.text1}
                text2={props.text2}/>
            </button>
           
        </div>
    );

    
}
export default PayButton