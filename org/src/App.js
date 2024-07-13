import { useState } from 'react';
import './App.css';
import Header from './Componentes/Header/header';
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg/MiOrg';

console.log(Header)
function App() {

  const [mostrarForm, actualizarMostrar]= useState(true)

  //Ternario ==> condicion? seMuestra : noMuestra
//Condicion && seMuestra
  const cambiarMostrar = ()=>{
    actualizarMostrar(!mostrarForm)
  }

  return (
    <div>
      <Header />
       {/* {
        mostrarForm ? <Formulario /> : <></>//Contenedor bacio
      } */}
      {mostrarForm && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
