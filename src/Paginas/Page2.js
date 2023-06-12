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
            <PayButton style='card'/>

        </div>
        
    )
}
export default Page2