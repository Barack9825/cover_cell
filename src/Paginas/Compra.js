import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import './Pagina.css';

import Boton from '../componentes/Boton';
import Fondo from '../componentes/Fondo';
import Imagen from '../componentes/Imagen';
import PayButton from '../componentes/PayButton';
import PriceAmount from '../componentes/Price-Amount';
import Selector from '../componentes/Selector';
import Title from '../componentes/Title';

import { AiOutlineShoppingCart } from 'react-icons/ai'



function Compra() {

  const { addToCar, Carro, Recepcion } = useContext(AppContext)

  return (

    <div className="Page">

      <Fondo />
      <Selector
        directory='Avanzar'
        ManejarClick={Carro} />

      <Selector
        directory='Retroceder'
        ManejarClick={Recepcion} />

      <Title
        title='Nila'
        subtitle='Cover for Iphone'
        thirdtitle='personalized' />

      <div className='content'>

        <button className="preview"><Imagen out={false} /></button>
        <Imagen />

      </div>

      <div className='footer'>

        <PriceAmount />

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
          typeButton='card'
          text1={<AiOutlineShoppingCart />}
          text2='Add to card' />

      </div>

    </div>
  );
}

export default Compra;
