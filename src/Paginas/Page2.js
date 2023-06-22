import React, {useContext} from "react";
import Title from "../componentes/Title";
import PriceAmount from "../componentes/Price-Amount";
import Imagen from "../componentes/Imagen";
import Item from "../componentes/Item";
import "./Page.css";
import PayButton from "../componentes/PayButton";
import { AppContext } from "../Context/AppContext";
import Selector from "../componentes/Selector";

function Page2(){

    const {Retroceder, Avanzar} = useContext(AppContext)

    return(
        <div className="Page">
            <Selector/>
            <Title page={2}/>
            
            <Imagen page= {2}/>
            <div className="datos-contenedor">
                <Item 
                itemTitle='Iphone'
                page={2}/>
                <PriceAmount 
                precio='60$'
                cantidad={5}/>
                
            </div>
            <div className="groupOfButton">
                <PayButton 
                ManejarClick={Avanzar}
                style='card'
                text='Check out'/>
                <PayButton
                style='PayPal'
                text1='Buy with '
                text2='PayPal'/>
                <PayButton
                style='Ipad'
                text1='Buy with '
                text2='Icloud'/>
            </div>
        </div>
        
    )
}
export default Page2