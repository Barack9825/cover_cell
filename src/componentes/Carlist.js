import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import CarItem from "./CarItem";

function Carlist() {
    const { carro,eliminate } = useContext(AppContext)
    const carros = carro.map((element,index) => {
        return (
            <CarItem 
            key={index}
            picture={element.picture}
            cantidad={element.cantidad}
            precio={element.precio}
            modelo={element.modelo}
            ManejarClick={() =>{eliminate(element.id)}}/>
        )
    })

    return (
       <>{carros}</> 
    )
}

export default Carlist