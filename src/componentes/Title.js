import React from "react";
import '../hojas_de_estilo/Title.css'

function Title(props) {

    return (

        <>

            <div className="Title-container">
                <h1 className="Title">{props.title}</h1>
            </div>

            <div className="Title-container">
                <h2 className="sub-Title">{props.subtitle}</h2>
            </div>

            <div className="Title-container">
                <h3 className="sub-Title">{props.thirdtitle}</h3>
            </div>

            <hr></hr>

        </>
    );
}

export default Title;