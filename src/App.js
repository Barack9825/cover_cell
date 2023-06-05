
import './App.css';
import Boton from './componentes/Boton';
import PayButton from './componentes/PayButton';
import Price_Amount from './componentes/Price-Amount';

function App() {
  return (
    <div className="App">
      <div className="Title-container">
        <h1 className="Title">Nila</h1>
      </div>
      <div className="Title-container">
        <h2 className="sub-Title">Cover for Iphone</h2> 
      </div>
      <div className="Title-container">
        <h3 className="sub-Title">Personalized</h3> 
      </div>
      <div className="Image-container">
        <image alt="Imagen de cover"/>
        <button className="preview">button</button>
      </div>
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

export default App;
