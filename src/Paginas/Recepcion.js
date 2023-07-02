import React,{useContext} from "react";
import { AppContext } from "../Context/AppContext";
import './Pagina.css'
import '../hojas_de_estilo/Table.css'


import Fondo from "../componentes/Fondo";
import Formulario from "../componentes/Formulario";
import Option from "../componentes/Option";
import Title from "../componentes/Title";




function Recepcion() {

    const {Compra,Cuenta} = useContext(AppContext)

    return (
        <div className="Page">

            <Title
                title='Nila'
                subtitle='Bienvenidos' />

            <Fondo />

            <div className="row">

                <div className="column">
                    <Formulario
                        entries={['Nombre', 'Apellidos', 'Correo Electrónico', 'Número de teléfono', 'Nombre de Usuario', 'Contraseña']}
                        text='¡¡Regístrate!!' />
                </div>

                <div className="column">
                    <Formulario
                        entries={['Nombre de Usuario', 'Contraseña']}
                        text='Iniciar Sesión' />
                </div>

                <div className="column">
                    
                    <Option 
                    text='Comprar'
                    ManejarClick={Compra}/>
                    
                    <Option 
                    text='Manejar Cuentas'  
                    ManejarClick={Cuenta}/>
                    
                    <Option text='Añadir Ubicación' />
                </div>

            </div>

        </div>

    );
}

export default Recepcion;
