import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListarOpciones from "../Lista de Opciones/ListaOpciones"
import Boton from "../Btn/btn"

const Formulario =()=>{
    
    const manejarEnvio=(e)=>{
        //Importante
        //Le quitamos la responsabilidad al navegador
        //e=Evento
        e.preventDefault()
        console.log("manejar envio", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo='Nombre' placeholder="Ingresar nombre" requied/>
            <CampoTexto titulo='Puesto' placeholder="Ingresar puesto" requied/>
            <CampoTexto titulo='Foto' placeholder="Ingresar enlace de foto" requied/>
            <ListarOpciones />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario
