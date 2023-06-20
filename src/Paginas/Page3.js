import React from "react";
import { BiLogoMastercard } from "react-icons/bi"
import Item from "../componentes/Item";


function Page3(){
    return(
        <div className='Pay-container'>
          <Item
          page={3}
          heading='address'
          data={['Avenida Caxanga', 'Recife','PE 44886.232', 'Brasil' ]}/>
       

        </div>
    );
} 

export default Page3;