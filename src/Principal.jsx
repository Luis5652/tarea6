import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Cartas from "./Cartas";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import Modal4 from "./Modal4";
import Modal5 from "./Modal5";

function Inicio(props){
    return(
        <div>
            <h1>esto es principal</h1>
            <Cartas></Cartas>
        </div>
        
    );
}
function Peliculas(props){
    return(
        <div>
            <h1>estos es peliculas</h1>
            <Modal1></Modal1>
            <Modal2></Modal2>
            <Modal3></Modal3>
            <Modal4></Modal4>
            <Modal5></Modal5>
        </div>
    );
}


function Principal(props){
    return(
        <div className="princ">
            <div className="contenido">
                <div className="titulo"><h1>CINEMATICA BOLIVIA</h1></div>
                <div className="nabvar">
                    <ul className="lista">
                        <li>
                            <Link to='/'>PRINCIPAL</Link>
                        </li>
                        <li>
                            <Link to='/pag2'>PELICULAS</Link>
                        </li>
                    </ul>
                </div>
                <div className="cuerpo">
                <Routes>
                    <Route path="/" element={<Inicio></Inicio>}></Route>
                    <Route path="/pag2" element={<Peliculas></Peliculas>}></Route>
                </Routes>
                </div>
            </div>
            <div className="footer">  
                <div>
                    <h1>
                        NOMBRES: LUIS FERNANDO MAMANI ALIAGA
                    </h1>
                    <h1>
                    MATERIA:  INF-122
                    </h1>
                </div>
                
            </div>
        </div>
    );
}
export default Principal;