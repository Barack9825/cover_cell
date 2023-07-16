import React, { useState, useEffect, createContext } from "react";
import { Articulo } from "../Data/Articulo";
export const AppContext = createContext();

function AppContextProvider(props) {

  /*Definición de los Estados*/

  const [amount, setAmount] = useState(0);
  const [article, SetArticle] = useState(Articulo);
  const [car, setCar] = useState([]);
  const [page, setPage] = useState("Compra");
  const [selection, SetSelection] = useState(1);
  


  /*Deficinición de constantes*/

  const paginado = ["Recepción", "Carro", "Cuentas", "Factura", "Compra"];

  const goTO = paginado.map((element) => {
    return () => {
      setPage(element);
    };
  });


  /*Definición de funciones*/

  function addToCar() {
    if (amount !== 0) {
      setCar([...car, {
        modelo: 'iphone',
        picture: article[1].picture,
        precio: article[1].price,
        cantidad: amount,
        total:article[1].price*amount
      }])
    }
  };

  /* function Select(){} */

  const Aumentar = () => {
    setAmount(amount + 1);
  };
  const Disminuir = () => {
    setAmount(amount - 1);
  };

  function Animated(elemento, animacion) {

    elemento.classList.add(animacion);
    elemento.addEventListener("animationend", () => {
      elemento.classList.remove(animacion);
    });
  }

  function changeCoverNext() {
    setAmount(0)
    rotacion(true)
    const elemento = document.getElementsByClassName("Image-container1");

    const anim = ["Animatedin-left", "Animatedout-left"];

    Animated(elemento[0], anim[0])
    Animated(elemento[1], anim[1])

  }

  function changeCoverPrevious() {
    setAmount(0)
    rotacion(false)
    const elemento = document.getElementsByClassName("Image-container1");

    const anim = ["Animatedin", "Animatedout"];

    Animated(elemento[1], anim[1])
    Animated(elemento[2], anim[0])

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
        selección: selection,
        carro: car,
        Recepcion: goTO[0],
        Carro: goTO[1],
        Cuenta: goTO[2],
        Factura: goTO[3],
        Compra: goTO[4],
        addToCar,
        Aumentar,
        Disminuir,
        changeCoverNext,
        changeCoverPrevious,
      }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
