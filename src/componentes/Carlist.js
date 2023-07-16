import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import CarItem from "./CarItem";

function Carlist() {
    const { carro } = useContext(AppContext)
    const carros = carro.map((element) => {
        return (
            <CarItem 
            picture={element.picture}
            cantidad={element.cantidad}
            precio={element.precio}
            modelo={element.modelo}/>
        )
    })

    return (
       <>{carros}</> 
    )
}

export default Carlist