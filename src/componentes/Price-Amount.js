import React, { useContext } from "react";
import '../hojas_de_estilo/Price-Amount.css'
import { AppContext } from "../Context/AppContext";

function Price_Amount(props) {


    const { pagina, variarCantidad,cantidad } = useContext(AppContext)

    return (

        <div className="PA-container">

            <div className="amount">

                <button
                    className={`select mas ${pagina==='Carro'? 'none':''}`}
                    onClick={()=>{variarCantidad(1)}}>
                    +
                </button>

                <h1 className="amount">{props.cantidad}</h1>

                <button
                    className={`select menos ${pagina==='Carro'? 'none':''} ${cantidad ===0 ? 'hidden' : ''}`}
                    onClick={()=>{cantidad !==0 ? variarCantidad(-1): variarCantidad(0)}}>
                    -
                </button>

                <p className="cantidad">Cantidad</p>

            </div>
            <h1 className="pt">{`$${props.precio}`}</h1>

            <p className="precio">Price</p>
        </div>
    )
    /* switch (pagina) {

        case "Comra":
            return (

                <div className="PA-container">

                    <div className="amount">

                        <button
                            className="select mas"
                            onClick={Aumentar}>
                            +
                        </button>

                        <h1 className="amount">{cantidad}</h1>

                        <button
                            className="select menos"
                            onClick={Disminuir}>
                            -
                        </button>

                        <p className="cantidad">Cantidad</p>

                    </div>
                    <h1 className="pt">{`$${props.precio}`}</h1>

                    <p className="precio">Price</p>
                </div>
            )
        case "Carro":
            return (
                <div className="PA-container">
                    <div className="amount">
                        <h1 className="amount">{cantidad}</h1>

                        <p className="cantidad">Cantidad</p>
                    </div>
                    <h1 className="pt">{`$${props.precio}`}</h1>

                    <p className="precio">Price</p>
                </div>
            )

        case "Factura":
            return (
                <div>
                    <h1 className="Pay">{props.Pay}</h1>
                    <h1 className="Cancel"
                        onClick={Carro}>{props.Cancel}</h1>
                    <hr></hr>
                </div>
            )
        default:
            break;
    } */



}
export default Price_Amount;