import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListarOpciones from "../Lista de Opciones/ListaOpciones"
import Boton from "../Btn/btn"
import { useState } from "react"

const Formulario =(props)=>{
    const [nombre, actualizarNombre]= useState();
    const [puesto, actualizarPuesto]= useState();
    const [foto, actualizarFoto]= useState();
    const [equipo, actualizarEquipo]= useState();
    
    const {registrarColaborador} = props
    
    const manejarEnvio=(e)=>{
        //Importante
        //Le quitamos la responsabilidad al navegador
        //e=Evento
        e.preventDefault()
        console.log("Manejar envio")
    
        let datosEnviar={
            nombre, 
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo='Nombre' 
                placeholder="Ingresar nombre" 
                requied
                valor={nombre}
                actualizarValor={actualizarNombre}
                />
            <CampoTexto 
                titulo='Puesto' 
                placeholder="Ingresar puesto" 
                requied
                valor={puesto}
                actualizarValor={actualizarPuesto}                
            />
            <CampoTexto 
                titulo='Foto' 
                placeholder="Ingresar enlace de foto" 
                requied
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListarOpciones
                valor={equipo}
                actualizarValor={actualizarEquipo}
            />

            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario
