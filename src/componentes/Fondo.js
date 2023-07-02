import React, {useContext} from "react";
import { AppContext } from "../Context/AppContext";
import '../hojas_de_estilo/Fondo.css'

function Fondo() {

    const {pagina} = useContext(AppContext)
    
    return (

        <img
            className= {`fondo ${pagina==='Factura' ? 'pay': ' '}`}
            src={require('../assets/Fondo-minimalista.jpg')}
            alt='fondo de la app' />

    );
}

export default Fondo;