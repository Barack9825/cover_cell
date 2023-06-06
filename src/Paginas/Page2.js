import React from "react";
import Title from "../componentes/Title";
import Imagen from "../componentes/Imagen";
import Price_Amount from '../componentes/Price-Amount';
import './Page1.css'
import PayButton from "../componentes/PayButton";

function Page2(){
    return(
        <div className="page">
        <Title page={2}/>
        <Imagen page={2}/>
        <Price_Amount
        precio='60$'
        cantidad={5}/>
        <PayButton 
        style="Paypal" 
        text='Buy with PayPal'/>
        </div>
        
        
    )
}
export default Page2;