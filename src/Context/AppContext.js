import React, { useState, createContext } from "react";
import { Articulo } from "../Data/Articulo";
export const AppContext = createContext();

function AppContextProvider(props) {
  /*Definición de los Estados*/

  const [amount, setAmount] = useState(0);
  const [article, SetArticle] = useState(Articulo);
  const [car, setCar] = useState([]);
  const [page, setPage] = useState("Compra");
  

  /*Definición de funciones*/
  function navegar(pag) {
    setPage(pag);
  }

  function addToCar() {
    if (amount !== 0) {
      setCar([
        ...car,
        {
          id: car.length,
          modelo: "iphone",
          picture: article[1].picture,
          precio: article[1].price,
          cantidad: amount,
          total: article[1].price * amount,
        },
      ]);
    }
  }

  function eliminate(index) {
    setCar(car.filter((carro) =>{return carro.id !== index}));
  }
  /* function Select(){} */

  function variarCantidad(valor) {
    setAmount(amount + valor);
  }

  function Animated(elemento, animacion) {
    elemento.classList.add(animacion);
    elemento.addEventListener("animationend", () => {
      elemento.classList.remove(animacion);
    });
  }

  function changeCover(elementoIn,elementoOut,animacionIn,animacionOut,next) {
    setAmount(0);
    rotacion(next);

    Animated(elementoIn, animacionIn);
    Animated(elementoOut, animacionOut);
  }
  
  

  function rotacion(next) {
    let resultado = [];
    for (let i = 0; i < article.length; i++) {
      let indice = !next ? (i + 1) % article.length : (i - 1) % article.length;
      if (indice < 0) {
        indice = article.length - 1;
      }
      resultado[indice] = article[i];
    }

    SetArticle(resultado);
  }

  return (
    <AppContext.Provider
      value={{
        pagina: page,
        cantidad: amount,
        article,
        carro: car,
        navegar,
        addToCar,
        changeCover,
        variarCantidad,
        eliminate
      }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
