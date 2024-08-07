import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto=(props)=>{
    const placeholderModificador=`${props.placeholder}...`

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
    }
    
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificador} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}/>
    </div>
}

export default CampoTexto
