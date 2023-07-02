import React, { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import './App.css'

import Recepcion from "./Paginas/Recepcion";
import Cuentas from "./Paginas/Cuentas";
import Factura from "./Paginas/Factura";
import Compra from "./Paginas/Compra";
import Carro from "./Paginas/Carro";

function App() {

    const paginado = {
        'Recepción': <Recepcion />,
        'Cuentas': <Cuentas />,
        'Factura': <Factura />,
        'Compra': <Compra />,
        'Carro': <Carro />
    }

    const { pagina } = useContext(AppContext);

    return (
        <div className="App">

            {paginado[pagina]}

        </div>
    );
}
export default App;