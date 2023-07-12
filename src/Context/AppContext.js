import React, { useState, createContext } from "react";
import { Articulo } from "../Data/Articulo";
export const AppContext = createContext();





function AppContextProvider(props) {

    /*  */

    const [page, setPage] = useState('Compra');

    const [amount, setAmount] = useState(0);

    const [car, setCar] = useState();

    const [total, setTotal] = useState(0);

    const [article, SetArticle] = useState(Articulo);

    const [selection, SetSelection] = useState(1);

    const [pick, SetPick] = useState(article[selection])/*   function addToCar() {
          setCar(price);
          setTotal(total + price * amount);
      }; */

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

    function rotacion(next) {
        let resultado = []
        for (let i = 0; i < article.length; i++) {
            let indice = next ? (i + 1) % article.length : (i - 1) % article.length;
            if (indice < 0) {
                indice = article.length - 1
            }
            resultado[indice] = article[i]
        }
        /*  */
        SetArticle(resultado)
    }
    
    function Picked() {
        SetPick(article[selection])
    }
    function Animated(elemento, animacion) {

        elemento.classList.toggle(animacion)
        elemento.addEventListener('animationend', () => { elemento.classList.remove(animacion) })
    }

    function Static(elemento) {
        elemento.classList.remove('Animated')
    }

    function changeCoverNext() {
        if (selection === article.length - 2) {

            rotacion(true);
            SetSelection(1)
        }
        else {
            SetSelection(selection + 1)
        }
        const element = document.getElementsByClassName('Image-container1')
        console.log(element)
        element[0].style = "red"
    }

    function changeCoverPrevious() {
        console.log(pick)
        
        if (selection === 1) {
            rotacion(false);
            /* SetSelection(1) */

            /* console.log(elemento.length) */


        }
        else {
            SetSelection(selection - 1)
        }
        Picked()
        const elemento = document.getElementsByClassName('Image-container1')
        
        const anim = ['Animatedin', 'Animatedout']
        for (let index = 0; index < elemento.length; index++) {
            Animated(elemento[index], anim[index])
        }
        console.log(elemento)

    }

    /* SetArticle(
        
        } */

    return (
        <AppContext.Provider
            value={
                {
                    elegido:pick,
                    pagina: page,
                    cantidad: amount,
                    article,
                    selección: selection,
                    carro: car,
                    total: total,
                    Recepcion: goTO[0],
                    Carro: goTO[1],
                    Cuenta: goTO[2],
                    Factura: goTO[3],
                    Compra: goTO[4],
                    Picked,
                    /* addToCar, */
                    Aumentar,
                    Disminuir,
                    changeCoverNext,
                    changeCoverPrevious,
                    rotacion
                }}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;