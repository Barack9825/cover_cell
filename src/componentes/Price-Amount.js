import React, { useContext } from "react";
import '../hojas_de_estilo/Price-Amount.css'
import { AppContext } from "../Context/AppContext";

function Price_Amount(props) {


    const { pagina, cantidad, Aumentar, Disminuir, Carro } = useContext(AppContext)

    switch (pagina) {

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
    }



}
export default Price_Amount;