import React, { useContext } from 'react';
import './Page.css';
import Boton from '../componentes/Boton';
import PayButton from '../componentes/PayButton';
import PriceAmount from '../componentes/Price-Amount';
import Title from '../componentes/Title';
import Imagen from '../componentes/Imagen';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AppContext } from '../Context/AppContext';
import Selector from '../componentes/Selector';


function Page() {

  const { cantidad, addToCar } = useContext(AppContext)

  return (
    <div className="Page">

      <img
        className='fondo'
        src={require('../assets/Fondo-minimalista.jpg')}
        alt='fondo de la app' />
      <div className='header'>
        <Selector
          directory='Avanzar' />

        <Selector
          directory='Retroceder' />
        <Title />
      </div>

      <div className='content'>
        <button className="preview"><Imagen out={false} /></button>
        <Imagen />
      </div>
      
      <div className='footer'>

        <PriceAmount
          page={1}
          precio='60$'
          cantidad={cantidad}
          price='price' />

        <div className='selectSize-container'>
          <p className='selectSize'>Select size :</p>

          <div className='model-container'>

            <Boton text='Iphone' />
            <Boton text='Iphone' />
            <Boton text='Iphone' />
            <Boton text='Iphone' />
            <Boton text='Iphone' />
          </div>
        </div>
        <PayButton
          ManejarClick={addToCar}
          style='card'
          text1={<AiOutlineShoppingCart />}
          text2='Add to card' />
      </div>
    </div>
  );
}

export default Page;
