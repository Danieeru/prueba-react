import React, { useState } from "react";
import Listado from "./Listado";

export const Buscar = () =>{
    const [inputText, setInputText] = useState('');

    const[datosGuardados, setDatosGuardados] = useState(false);


    const handlerInputText = (evento) =>{
        const texto = evento.target.value;
        setInputText(texto);
    }

    const guardarDatos =() =>{

        localStorage.setItem('nombre',inputText);
        setDatosGuardados(true);
        alert('Datos guardados');
    }


    return(
        <div className="container">
            <h1 id="titulo-buscar">Buscar</h1>
            <div className="d-flex justify-content-center">
                <input placeholder="id" className="input-nombre" onChange={handlerInputText}/>
                <button className="btn-guardar" onClick={guardarDatos}>Guardar</button>
            </div>
            <div>
                {(!!datosGuardados && <Listado id={inputText}/>)}
            </div>

        </div>
    );

}

export default Buscar;





/*import React from 'react'

const Buscar = () => {
  return (
    <div>
        <h1 id='titulo-buscar'>Buscar</h1>
    </div>
  )
}

export default Buscar*/