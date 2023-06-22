import React, {useContext} from "react";
import './App.css'
import Page1 from "./Paginas/Page1";
import Page2 from "./Paginas/Page2"
import Page3 from "./Paginas/Page3";
import { AppContext } from "./Context/AppContext";

function App(){
    
    const pageContainer = [<Page1/>,<Page2/>,<Page3/>]
    
    const {pagina} = useContext(AppContext);
    
    return(
        <div className="App">
           
            {pageContainer[pagina]}

        </div>
    );
}
export default App;