import React from "react";
import '../hojas_de_estilo/Item.css'
import { MdNavigateNext } from "react-icons/md"
import SubItem from "./SubITem";

function Item(props){
    switch(props.page){
        case 2:
            return(
                <p className="itemTitle">{props.itemTitle}</p>
            )
        case 3:
            return(
                <div>
                    <div className="itemBuy row">
                        
                        <div className="column">
                            <p className='heading'>{props.heading}</p>
                        </div>
                        
                        <div className="column">
                            {props.data.forEach(element => {
                                <p> {element} </p>
                            })}
                            {/* <SubItem
                            data={props.data}/> */}
                        </div>
                        
                        <div className="column">
                            <p className="Navigate"><MdNavigateNext /></p>
                        </div> 
                    
                     </div>    
                     <hr></hr> 
                </div>
                
            )
        default:
            break;
                
    }
    
}
export default Item