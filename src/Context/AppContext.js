import React, { useState } from "react";
import { createContext } from "react";


export const AppContext = createContext()

function AppContextProvider(props){

    const[page,setPage] = useState(0)

    const[amount,setAmount] = useState(0)

    const[car,setCar] = useState({})

    function addToCar(){
        setCar({
            precio:amount*60
        })
    }

    function Avanzar(){
     setPage(page+1)   
    }

    function Retroceder(){
        setPage(page-1)
    }

    function Aumentar(){
        setAmount(amount+1)
    }

    function Disminuir(){
        setAmount(amount-1)
    }

    return(
    <AppContext.Provider
    value = {
        {pagina:page,
        cantidad:amount,
        Avanzar,
        Retroceder,
        Aumentar,
        Disminuir}}>
        {props.children}
    </AppContext.Provider>
    );
}

export default AppContextProvider;