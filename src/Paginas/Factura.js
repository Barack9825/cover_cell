import React, { useContext } from "react";
import { BiTrendingUp } from "react-icons/bi"
import './Pagina.css'

import Fondo from "../componentes/Fondo";
import Imagen from "../componentes/Imagen";
import Item from "../componentes/Item";
import PayItem from "../componentes/PayItem";
import PriceAmount from "../componentes/Price-Amount";


import { AppContext } from "../Context/AppContext";

function Factura() {

  const { precio, total } = useContext(AppContext)

  return (
    <div className='Page'>

      <Fondo />
      <Imagen />

      <PriceAmount
        Pay='Pay'
        Cancel='Cancel' />

      <Item
        page={3}
        heading='address'
        data={['Avenida Caxanga', 'Recife', 'PE 44886.232', 'Brasil']} />

      <Item
        page={3}
        heading={<BiTrendingUp></BiTrendingUp>}
        data={['MASTERCARD', '(.....23456)']} />

      <PayItem
        subtotal={`$${precio}`}
        shipping={`$${19}`}
        total={`$${total}`} />

      <p className="foot">Hold Near Reader</p>

    </div>
  );
}

export default Factura;