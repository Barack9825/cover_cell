import React, {useContext} from "react";
import {AiOutlineArrowRight ,AiOutlineArrowLeft} from 'react-icons/ai'
import { AppContext } from '../Context/AppContext';
import '../hojas_de_estilo/Selector.css'


function Selector(){

    const{pagina,Avanzar, Retroceder} = useContext(AppContext)
    return(
        <button 
      className='Avanzar'

      onClick={pagina===0 ? Avanzar : Retroceder}>{ pagina===0 ? <AiOutlineArrowRight/>: <AiOutlineArrowLeft/>}</button>
    ); 
}

export default Selector;