import React from "react";
import '../hojas_de_estilo/Title.css'

function Title(props) {
    switch (props.page){
        case 1:
            return(
                <>   
                <div className="Title-container">
                <h1 className="Title">Nila</h1>
                </div>
                <div className="Title-container">
                <h2 className="sub-Title">Cover for Iphone</h2> 
                </div>
                <div className="Title-container">
                <h3 className="sub-Title">Personalized</h3> 
                </div>
                
                </>  
            );
            break;
            
    case 2: 
        return(
        <>   
            <div className="Title-container">
            <h1 className="Title">Nila</h1>
            </div>
            
        </>  
        );
        break;
    default :
        break;
    }
}
export default Title;