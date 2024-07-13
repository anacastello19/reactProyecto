import { useState } from "react"
import "./MiOrg.css"



const MiOrg=(props)=>{
    //Estado - hooks
    //useState: utiliza el estatus
    //const [nombreVariable, funcionActualiza]=useState(ValorInicial)
    console.log(props)
    // const [mostrar, actualizarMostrar]= useState(true)
    // const manejarClick=()=>{
    //     console.log("Mostrar/Ocultar elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/app.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg