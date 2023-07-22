import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "./Pagina.css";

import Fondo from "../componentes/Fondo";
import Item from "../componentes/Item";
import PayButton from "../componentes/PayButton";
import PriceAmount from "../componentes/Price-Amount";
import Selector from "../componentes/Selector";
import Title from "../componentes/Title";
import Carlist from "../componentes/Carlist";

function Carro() {
  const { navegar } = useContext(AppContext);

  return (
    <div className="Page">
      <Selector directory={"Retroceder"} ManejarClick={() => {navegar('Compra')}} />

      <Fondo />
      <Title title="Nila" />

      <div className="datos-contenedor">
        
        <Carlist/>
      
      </div>

      <div className="groupOfButton">
        <PayButton 
        ManejarClick={() => {navegar('Factura')}} 
        typeButton="card" 
        text2="Check out" />

        <PayButton 
        typeButton="PayPal" 
        text1="Buy with " 
        text2="PayPal" />

        <PayButton 
        typeButton="Ipad" 
        text1="Buy with " 
        text2="Icloud" />
      </div>
    
    </div>
  )
}

export default Carro;
