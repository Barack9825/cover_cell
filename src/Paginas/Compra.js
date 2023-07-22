import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "./Pagina.css";

import Boton from "../componentes/Boton";
import Fondo from "../componentes/Fondo";
import Imagenlist from "../componentes/Imagenlist";
import Imgicon from "../componentes/ImgIcon";
import PayButton from "../componentes/PayButton";
import PriceAmount from "../componentes/Price-Amount";
import Selector from "../componentes/Selector";
import Title from "../componentes/Title";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

function Compra() {
  const { addToCar, changeCover, navegar, cantidad, article } =
    useContext(AppContext);

  const elemento = document.getElementsByClassName("Image-container1");
  const anim = [
    "Animatedin-left",
    "Animatedout-left",
    "Animatedin",
    "Animatedout",
  ];

  return (
    <div className="Page">
      <Fondo />

      <Selector directory="Avanzar" ManejarClick={() =>{navegar("Carro")}} />

      <Selector directory="Retroceder" ManejarClick={() =>{navegar("Recepción")}} />

      <Title
        title="Nila"
        subtitle="Cover for Iphone"
        thirdtitle="personalized"
      />

      <div className="content">
        <div className="preview">
          <Imgicon />
        </div>

        <MdNavigateBefore
          className="Navigator"
          onClick={()=>{changeCover(elemento[1], elemento[2], anim[3], anim[2],false)}}
        />

        <Imagenlist />

        <MdNavigateNext
          className="Navigator"
          onClick={()=>{changeCover(elemento[0], elemento[1], anim[0], anim[1],true)}}
        />
      </div>

      <div className="footer">
        <PriceAmount cantidad={cantidad} precio={article[1].price} />

        <div className="selectSize-container">
          <p className="selectSize">Select size :</p>

          <div className="model-container">
            <Boton text="Iphone" />
            <Boton text="Iphone" />
            <Boton text="Iphone" />
            <Boton text="Iphone" />
            <Boton text="Iphone" />
          </div>
        </div>

        <PayButton
          ManejarClick={addToCar}
          typeButton="card"
          text1={<AiOutlineShoppingCart />}
          text2="Add to card"
        />
      </div>
    </div>
  );
}

export default Compra;
