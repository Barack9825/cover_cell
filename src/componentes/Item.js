import React from "react";
import '../hojas_de_estilo/Item.css'
function Item(props){
    switch(props.page){
        case 2:
            return(
                <p className="itemTitle">{props.itemTitle}</p>
            )
        case 3:
                
    }
    
}
export default Item