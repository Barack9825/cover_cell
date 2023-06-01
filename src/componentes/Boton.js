import React from 'react'
import '../hojas_de_estilo/Boton.css'

 function Boton (props) {
  return (
   
      <button className='boton'>
        {props.text}
      </button>
     )
}
export default Boton;