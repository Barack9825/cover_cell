import React from "react";
import Title from "../componentes/Title";
import Price_Amount from "../componentes/Price-Amount";
import Imagen from "../componentes/Imagen";
import Item from "../componentes/Item";
import "./Page.css";
import PayButton from "../componentes/PayButton";
function Page2(){
    return(
        <div className="Page">
            <Title page={2}/>
            
            <Imagen page= {2}/>
            <div className="datos-contenedor">
                <Item itemTitle='Iphone'/>
                <Price_Amount 
                precio='60$'
                cantidad={5}/>
                
            </div>
            <div className="groupOfButton">
                <PayButton 
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