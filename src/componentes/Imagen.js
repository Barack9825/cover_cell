import React from "react"
import '../hojas_de_estilo/Imagen'

function Imagen(props) {
    switch (props.page){
        case 1:
            return(
                <div className="Image-container">
                <img alt="Imagen de cover"/>
                <button className="preview">button</button>
              </div>
            )
            break;
        case 2:
            return(
                <div className="Image-container">
                <img alt="Imagen de cover"/> 
                </div>
            )

    }
    
}
export default Imagen;