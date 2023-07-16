import React, { useContext } from "react"
import { AppContext } from "../Context/AppContext"

import Imagen from "./Imagen"

function Imagenlist() {
    
    const { article } = useContext(AppContext)
    const listaDeImagenes = article.map((element, index) => {
       
        return (<Imagen
            state={`${index === 1 ? 'Selected':'onWait'} ${index === 2 ? 'After': ''} ${index === 0 ? 'Before': ''}${index > 2 ? 'hidden':'' }` }
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