import React, { useContext } from "react";
import { BiTrendingUp } from "react-icons/bi"
import Item from "../componentes/Item";
import PriceAmount from "../componentes/Price-Amount";
import Imagen from "../componentes/Imagen";
import PayItem from "../componentes/PayItem";
import { AppContext } from "../Context/AppContext";

function Page3() {

  const { precio, total } = useContext(AppContext)

  return (
    <div className='Page3'>

      <Imagen
        page={3} />

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

export default Page3;