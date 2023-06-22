import React, {useContext} from "react";
import '../hojas_de_estilo/Price-Amount.css'
import { AppContext } from "../Context/AppContext";

function Price_Amount(props){

    
    const { pagina,Aumentar,Disminuir,Retroceder } = useContext(AppContext)

    switch (pagina){
        
        case 0:
            return(
                <div>
                    
                    <button 
                    className="select mas"
                    onClick={Aumentar}>  
                        +
                    </button>

                    <h1 className="amount">{props.cantidad}</h1>
                    
                    <button className="select menos"
                    onClick={Disminuir}>  
                        -
                    </button>
                    
                    <h1 className="pt">{props.precio}</h1>
                    
                    <p className="precio">Price</p>
                </div>
            )
        
        case 2:
            return(
                <div>
                    <h1 className="Pay">{props.Pay}</h1>
                    <h1 className="Cancel"
                    onClick={Retroceder}>{props.Cancel}</h1>
                </div>
            )
        default:
            break;
    }
    
            
        
}
export default Price_Amount;