import "./ListaOpciones.css"

const ListarOpciones=(props)=>{
    //Metodo map -> arreglo.map((equipo, index)=>{
    //  return <option></option>
    //})
    const equipo=[
        'Programacion',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Móvil',
        'Innovación y  Gestión'
    ]

    const manejarCambio=(e)=>{
        console.log('cambio', e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="listar-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipo.map((equipo, index)=> <option key={index} value={equipo}>{equipo}</option>)}
            
        </select>
    </div>
}

export default ListarOpciones