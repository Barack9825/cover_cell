import React from "react"
import '../hojas_de_estilo/Imagen.css'


function Imagen({ out = true }) {

  return (
    <div className={out ? 'Image-container1' : 'Close'}>

      <img
        className="cover"
        src={require('../assets/Op.jpg')}
        alt="Imagen de cover" />

    </div>
  );


}
export default Imagen;