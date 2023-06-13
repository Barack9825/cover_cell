import React from "react";
import '../hojas_de_estilo/Item.css'
import { MdNavigateNext } from "react-icons/md"

function Item(props){
    switch(props.page){
        case 2:
            return(
                <p className="itemTitle">{props.itemTitle}</p>
            )
        case 3:
            return(
                <div className="itemBuy">
                    <p className='heading data'>{props.heading}</p>
                    <p className="body data">{props.data}</p>
                    <p className='data'><MdNavigateNext /></p>
                </div>
            )
        default:
            break;
                
    }
    
}
export default Item