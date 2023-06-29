import React from "react";

function PBI(props){
    
    return (
        <div>
            <p className="text1">{props.text1}</p>
            <p className="text2">{props.text2}</p>
        </div>
    );

    /* switch(props.style){
        case 'card':
            return(
               <p>{props.text}</p> 
            );
        case 'PayPal':
            return (
                <div>
                    <p className="text1">{props.text1}</p>
                    <p className="text2">{props.text2}</p>
                </div>
            );
        case 'Ipad':
            return (
                <div>
                    <p className="text1">{props.text1}</p>
                    <p className="text2">{props.text2}</p>
                </div>
            )
        default:
            break;
    } */
    
}
export default PBI; 