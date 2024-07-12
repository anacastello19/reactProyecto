import "./ListaOpciones.css"

const ListarOpciones=()=>{
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


    return <div className="listar-opciones">
        <label>Equipos</label>
        <select>
            {equipo.map((equipo, index)=> <option key={index}>{equipo}</option>)}
            
        </select>
    </div>
}

export default ListarOpciones