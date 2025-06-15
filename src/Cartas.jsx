import './Cartas.css'

function Cartas(props)
{
    return(
        <div className='PrinCartas'>
        <div className="Carta">
            <div className="imCarta">
                <img src="../public/brad.jpg" alt="" />
            </div>
            <div className="titCarta">
                <h3>BRAD PITT</h3>
            </div>
        </div>

        <div className="Carta">
            <div className="imCarta">
                <img src="../public/descarga.jpg" alt="" />
            </div>
            <div className="titCarta">
                <h3>JHONNY DEPP</h3>
            </div>
        </div>

        <div className="Carta">
            <div className="imCarta">
                <img src="../public/leo.jpg" alt="" />
            </div>
            <div className="titCarta">
                <h3>LEONARDO DICAPRIO</h3>
            </div>
        </div>
        </div>
    );
}
export default Cartas;