import React, { useState } from "react";
import { createContext } from "react";


export const AppContext = createContext()

function AppContextProvider(props){

    const[page,setPage] = useState(0)

    const[amount,setAmount] = useState(0)

    const[car,setCar] = useState()

    const[price,setPrice] = useState(60)

    const[total,setTotal] = useState(0)

    function addToCar(){
        setCar(price)
        setTotal(total+price*amount)
    }

    /* function Select(){
        
    } */

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
        precio:price,
        carro:car,
        total:total,
        addToCar,
        Avanzar,
        Retroceder,
        Aumentar,
        Disminuir}}>
        {props.children}
    </AppContext.Provider>
    );
}

export default AppContextProvider;