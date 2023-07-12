import React, { useContext } from "react"
import '../hojas_de_estilo/Imagen.css'
import { AppContext } from "../Context/AppContext";

function Imagen({ /* out = true,selected =true,next=true,*/picture, state }) {

  
  const { pagina } = useContext(AppContext)

  return(
    <div className={`Image-container1 ${state}`}>

          <img
            className="cover"
            src={require(`../assets/${picture}`)}
            alt="Imagen de cover" />

        </div>
  )
  
  /* switch (pagina) {

    case 'Compra':
      return (
        <div className={`${out ? 'Image-container1' : 'Close'} ${selected ? 'Selected': `onWait ${next ? 'After' : 'Before'}`} `}>

          <img
            className="cover"
            src={require(`../assets/${picture}`)}
            alt="Imagen de cover" />

        </div>
      );

    case 'Carro':
      return (
        <div className="Image-container2">
          <img
            className="cover"
            src={require(`../assets/${picture}`)}
            alt="Imagen de cover" />

        </div>

      );
    case 'Factura':
      return (
        <div className="Image-container3"><p></p></div>
      )
    default:
      break;
  } */



}
export default Imagen;