import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import '../hojas_de_estilo/Selector.css'


function Selector({ directory, ManejarClick}) {

  
  
  

  return (
    <button
      className={`arrow ${directory}`}
      onClick={ManejarClick}>
      {directory === "Retroceder" ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
    </button>
  );
}

export default Selector;