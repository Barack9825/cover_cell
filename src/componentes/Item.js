import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import '../hojas_de_estilo/Item.css'
import '../hojas_de_estilo/Table.css'

import { MdNavigateNext } from "react-icons/md"



import SubItem from "./SubITem";
function Item(props) {

    const { pagina } = useContext(AppContext)
    switch (pagina) {
        case "Carro":
            return (
                <p className="itemTitle">{props.itemTitle}</p>
            )
        case "Factura":
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
        default:
            break;

    }

}

export default Item;