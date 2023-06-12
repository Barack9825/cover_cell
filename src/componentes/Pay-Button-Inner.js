import React from "react";

function PBI(props){
    
    switch(props.style){
        case 'card':
            return(
               <p>{props.text}</p> 
            );
        default:
            break;
    }
    
}
export default PBI;