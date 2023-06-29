import React, { useContext } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { AppContext } from '../Context/AppContext';
import '../hojas_de_estilo/Selector.css'


function Selector({ directory }) {

  const { Avanzar, Retroceder } = useContext(AppContext)
  return (
    <button
      className={`arrow ${directory}`}
      onClick={directory === 'Avanzar' ? Avanzar : Retroceder}>
      {directory === "Retroceder" ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
    </button>
  );
}

export default Selector;