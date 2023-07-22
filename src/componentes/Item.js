import React from "react";
import '../hojas_de_estilo/Item.css'
import '../hojas_de_estilo/Table.css'

import { MdNavigateNext } from "react-icons/md"
import SubItem from "./SubITem";

function Item(props) {

    return (
        <div>
            <div className="itemBuy row">

                <div className="column">
                    <p className='heading'>{props.heading}</p>
                </div>

                <div className="column">

                    <SubItem
                        data={props.data} />

                </div>

                <div className="column">
                    <p className="Navigate"><MdNavigateNext /></p>
                </div>

            </div>
            <hr></hr>
        </div>

    )
    
    
}

export default Item;