import React, {useState} from 'react'
import addIcon from "../../images/add.svg" //hay que usar react icon
import deleteIcon from "../../images/delete.svg" //hay que usar react icon
import { IoColorFillSharp } from "react-icons/io5";
import "./taskForm.css"
const TaskMaker = (propiedades) => {
    let fechaActual = null
    return(
        <div className='nota'>
            <div className="containerSuperior"> 
                <div className='notaSuperior'>
                <textarea name="textareaNota" id="contenidoNota"></textarea>
                </div>
                <div className='containerIconos'>
                <img className='iconoNota' src={addIcon} alt="add"/>
                <img className='iconoNota' src={deleteIcon} alt="delete"/>
                <IoColorFillSharp className='colorPicker'/> 
                </div>
            </div>    
            <div className='containerInferior' >
                <div className='notaInferior'>
                <span className='fecha'>Fecha de creación:
                    <input type="date" id='fechaCreacion' value={fechaActual} disabled className='fecha fechaLimite'/>
                </span>
                <span className='fecha'>Fecha límite:
                    <input type="date" id='fechaLimite' className='fecha fechaLimite'/>
                </span> 
                </div>
                <div className="triangulo"></div>
            </div>
        </div>)
}

export  {TaskMaker}