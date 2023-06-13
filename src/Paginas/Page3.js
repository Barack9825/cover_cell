import React from "react";
import { BiLogoMastercard } from "react-icons/bi"
import Item from "../componentes/Item";


function Page3(props){
    return(
        <div className='Pay-container'>
          <Item
          page={3}
          heading='address'
          data='Avenida Caxanga PANDA WA PANDA DEWANAI'/>

        </div>
    );
} 

export default Page3;