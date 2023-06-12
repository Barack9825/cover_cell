import React from "react";
import '../hojas_de_estilo/Item.css'
function Item(props){
    return(
        <p className="itemTitle">{props.itemTitle}</p>
    )
}
export default Item