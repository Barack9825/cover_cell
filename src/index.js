import React/* ,{useState, useEffect} */ from "react";
import ReactDOM from "react-dom/client";

/* import { Greetings, UserCard } from "./Greetings";
import Product, {Navbar} from "./Product";*/
import { Button } from "./Boton"; 
/* import {TaskCard} from "./Task"
import { Saludar } from "./Saludar"; */
import { Post } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));


/* 
function Counter(){

    const[mensaje, setMensaje] = useState('')
    
    const [counter, setCounter]= useState(0)
    
    useEffect(() =>{
        console.log('render')
    },[counter]) 
    
    return (
        <div>
           <input onChange={e =>setMensaje(e.target.value)}/>
           <button onClick={() => {
            alert('El mensaje es:' + mensaje)
           }}>
               Save 
           </button>

           <hr/>

            <h1>Counter:{counter}</h1>'
           <button onClick ={() => setCounter(counter+1)}>
            Incrementar
           </button>
        </div>
    )
}
 */
root.render(
    <>
        <Post/>
        {/* <Counter/> */}
    </>
    );
 