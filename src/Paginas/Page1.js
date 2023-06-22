import React,{useContext} from 'react';
import './Page.css';
import Boton from '../componentes/Boton';
import PayButton from '../componentes/PayButton';
import PriceAmount from '../componentes/Price-Amount';
import Title from '../componentes/Title';
import Imagen from '../componentes/Imagen';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { AppContext } from '../Context/AppContext';

function Page() {

  const {cantidad} = useContext(AppContext)

  return (
    <div className="Page">
      <Title/>
      
      <Imagen page={1}/>
      
      <PriceAmount
        page={1}
        precio='60$'
        cantidad={cantidad}
        price='price'/>
      <div className='selectSize-container'>
        <p className='selectSize'>Select size :</p>
        </div>
      <div className='model-container'>
        
        <Boton text = 'Iphone'/>
        <Boton text = 'Iphone'/>
        <Boton text = 'Iphone'/>
        <Boton text = 'Iphone'/>
        <Boton text = 'Iphone'/>
     </div>
    <PayButton 
    style='card'
    text= 'Add to card'/>
    </div>
  );
}

export default Page;
