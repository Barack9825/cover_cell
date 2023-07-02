import React, { useState, createContext } from "react";
export const AppContext = createContext();



function AppContextProvider(props) {

    let directory;

    const [page, setPage] = useState('Compra');

    const [amount, setAmount] = useState(0);

    const [car, setCar] = useState();

    const [price, setPrice] = useState(60);

    const [total, setTotal] = useState(0);


    function addToCar() {
        setCar(price);
        setTotal(total + price * amount);
    };

    /* function Select(){
        
    } */

    const paginado = ["Recepción", "Carro", "Cuentas", "Factura", "Compra"]

    const goTO = paginado.map((element) => {
        return (
            () => {
                setPage(element)
            }
        )
    })

    function Aumentar() {
        setAmount(amount + 1)
    }

    function Disminuir() {
        setAmount(amount - 1)
    }

    return (
        <AppContext.Provider
            value={
                {
                    pagina: page,
                    cantidad: amount,
                    precio: price,
                    carro: car,
                    total: total,
                    Recepcion: goTO[0],
                    Carro: goTO[1],
                    Cuenta: goTO[2],
                    Factura: goTO[3],
                    Compra: goTO[4],
                    addToCar,
                    Aumentar,
                    Disminuir
                }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;