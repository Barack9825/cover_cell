
import './Page1.css';
import Boton from '../componentes/Boton';
import PayButton from '../componentes/PayButton';
import Price_Amount from '../componentes/Price-Amount';
import Title from '../componentes/Title';
import Imagen from '../componentes/Imagen';

function Page() {
  return (
    <div className="Page">
      <Title page={1}/>
      
      <Imagen/>
      
      <Price_Amount
        precio='60$'
        cantidad={5}/>
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
    text='Add to card'/>
    </div>
  );
}

export default Page;
