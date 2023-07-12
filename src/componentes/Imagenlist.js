import React, { useContext } from "react"
import { AppContext } from "../Context/AppContext"

import Imagen from "./Imagen"

function Imagenlist() {
    
    const { article, selección } = useContext(AppContext)
    const listaDeImagenes = article.map((element, index) => {
       
        return (<Imagen
            state={`${selección === index ? 'Selected':'onWait'} ${selección === (index+1) ? 'After': ''} ${selección === (index-1) ? 'Before': ''}`}
            key={index}
            picture={element.picture} />)
    })
    return (
        <>
            {listaDeImagenes
            }
        </>
    )
}
export default Imagenlist