import React, { useContext } from "react"
import '../hojas_de_estilo/Imagen.css'
import { AppContext } from "../Context/AppContext";

function Imagen({ out = true }) {

  const { pagina } = useContext(AppContext)

  switch (pagina) {

    case 'Compra':
      return (
        <div className={out ? 'Image-container1' : 'Close'}>

          <img
            className="cover"
            src={require('../assets/Op.jpg')}
            alt="Imagen de cover" />

        </div>
      );

    case 'Carro':
      return (
        <div className="Image-container2">
          <img
            className="cover"
            src={require('../assets/Op.jpg')}
            alt="Imagen de cover" />

        </div>

      );
    case 'Factura':
      return (
        <div className="Image-container3"><p></p></div>
      )
    default:
      break;
  }



}
export default Imagen;