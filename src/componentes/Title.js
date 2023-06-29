import React, { useContext } from "react";
import '../hojas_de_estilo/Title.css'
import { AppContext } from "../Context/AppContext";



function Title(props) {

    const { pagina } = useContext(AppContext)

    switch (pagina) {
        case 0:
            return (
                <>

                    <div className="Title-container">
                        <h1 className="Title">Nila</h1>
                    </div>

                    <div className="Title-container">
                        <h2 className="sub-Title">Cover for Iphone</h2>
                    </div>

                    <div className="Title-container">
                        <h3 className="sub-Title">Personalized</h3>
                    </div>

                </>
            );


        case 1:
            return (
                <>
                    <div className="Title-container">
                        <h1 className="Title">Nila</h1>
                    </div>

                </>
            );

        default:
            break;
    }
}
export default Title;