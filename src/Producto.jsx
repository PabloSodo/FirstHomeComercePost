import react, {Component} from "react"
import ProductoEstilos from './ProductoEstilos.css'


class Producto extends Component {
    constructor(){
        super();
        this.state={
            leyenda: ""
        }
    }
    handleClickComprar (){
       //alert("Gracias por su compra")
        this.setState({
            leyenda: "Gracias por su compra"
        })
    }

    render(){
        return(
            <div>
                <fieldset className="contenedor-producto">
                    <img 
                        className="imagen-testimonio"
                        src={require ('./piano.webp')}
                        alt={`foto de piano`}
                    />  
                    <div className="contenedor-texto-producto">
                        <h1>PIANO CASIO CDP130 88 TECLAS</h1>
                        <p className="texto-producto">10 tonos, metrónomo integrado y excelentes efectos digitales: el CDP-130 es ideal para iniciarse en el fascinante mundo del teclado. El sistema de altavoces mejorado se encarga de un sonido de piano impresionante, que suena incluso más espectacular con el botón de efecto de reverberación integrado: con solo pulsar un botón, el sonido del piano se convierte en la reverberación de una sala de conciertos y otorga a la propia actuación una nota muy auténtica. Con el tono de los instrumentos mejorado, cada pieza musical se convierte en una experiencia única que permanece en la memoria.</p>
                        <p>$415279</p>
                        <p>SKU: 20408</p>
                        <p>4 disponibles</p>

                        <button onClick={this.handleClickComprar.bind(this)}>Comprar</button>
                        <div id="leyenda">{this.state.leyenda}</div>
                    </div>
                </fieldset>
            </div>
        )
    }
}

export default Producto