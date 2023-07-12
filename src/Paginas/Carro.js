import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "./Pagina.css";

import Fondo from "../componentes/Fondo";
import Imagen from "../componentes/Imagen";
import Item from "../componentes/Item";
import PayButton from "../componentes/PayButton";
import PriceAmount from "../componentes/Price-Amount";
import Selector from "../componentes/Selector";
import Title from "../componentes/Title";


function Carro() {

    const { Compra, Factura } = useContext(AppContext)

    return (

        <div className="Page">

            <Selector
                directory={"Retroceder"}
                ManejarClick={Compra} />
            <Fondo />
            <Title title='Nila' />

            <div className="datos-contenedor">
        
            
                <Item itemTitle='Iphone' />
                <PriceAmount />

            </div>

            <div className="groupOfButton">

                <PayButton
                    ManejarClick={Factura}
                    typeButton='card'
                    text2='Check out' />

                <PayButton
                    typeButton='PayPal'
                    text1='Buy with '
                    text2='PayPal' />

                <PayButton
                    typeButton='Ipad'
                    text1='Buy with '
                    text2='Icloud' />

            </div>

        </div>

    )
}
export default Carro;