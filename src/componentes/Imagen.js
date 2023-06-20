import React from "react"
import '../hojas_de_estilo/Imagen.css'

function Imagen(props) {
    switch (props.page){
        case 1:
            return(
                <div className="Image-container1">
                    <img alt="Imagen de cover"/>
                    <button   button className="preview">button</button>
              </div>
            )
        case 2:
            return(
                <div className="Image-container2">
                  <img alt="Imagen de cover"/> 
                </div>
            )
        case 3: return(
            <>
            <div className="Image-container3">
                <img alt='preview'/>
                
            </div>
            <hr></hr>
            </>
        )
        default:
            break;
    }
    
}
export default Imagen;