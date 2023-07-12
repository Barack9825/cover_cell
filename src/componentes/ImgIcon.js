import React,{useContext} from "react";
import { AppContext } from "../Context/AppContext";
import '../hojas_de_estilo/ImgIcon.css'

function Imgicon(){
    const {elegido}=useContext(AppContext)

    return(
        <div className="Icon-container">
            <img className="Icon"
            src={require(`../assets/${elegido.picture}`)}
            alt='seleccionado'/>
        </div>
    )
}
export default Imgicon