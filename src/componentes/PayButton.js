import React,{useContext} from "react";
import '../hojas_de_estilo/payButton.css'
import PBI from "./Pay-Button-Inner";
import { AppContext } from "../Context/AppContext";

function PayButton(props) {
    
    const { Avanzar } = useContext(AppContext)

    return(

        <div className="buttonContainer">
            <button 
            className= {`buttonPay ${props.style}`}
            onClick={Avanzar}>
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