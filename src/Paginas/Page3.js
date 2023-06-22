import React, {useState} from "react";
import { BiTrendingUp } from "react-icons/bi"
import Item from "../componentes/Item";
import Price_Amount from "../componentes/Price-Amount";
import Imagen from "../componentes/Imagen";


function Page3(){
    return(
        <div className='Page3'>
          <Imagen
          page={3}/>
          <Price_Amount
          Pay='Pay'
          Cancel='Cancel'/>
          <Item
          page={3}
          heading='address'
          data={['Avenida Caxanga', 'Recife','PE 44886.232', 'Brasil' ]}/>
          <Item
          page={3}
          heading= {<BiTrendingUp></BiTrendingUp>}
          data={['MASTERCARD', '(.....23456)']}/>
          <p className="foot">Hold Near Reader</p>

        </div>
    );
} 

export default Page3;