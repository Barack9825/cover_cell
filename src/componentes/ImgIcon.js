import React,{useContext} from "react";
import { AppContext } from "../Context/AppContext";
import '../hojas_de_estilo/ImgIcon.css'

function Imgicon(){
    const {article}=useContext(AppContext)

    return(
        <div className="Icon-container">
            <img className="Icon"
            src={require(`../assets/${article[1].picture}`)}
            alt='seleccionado'/>
        </div>
    )
}
export default Imgicon