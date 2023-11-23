import React, {useState} from 'react'
import "./index.css"
import { IoMenuOutline, IoColorFillSharp } from "react-icons/io5";
import { Menu } from './components/Menu-component/menu';
import { TaskMaker } from './components/TastkForm-component/taskForm';
import logo from "./images/todolistLogo.svg"
function App() {

  const [fondo,setBg] = useState(0)
  const changeBg = (newId) =>{
    setBg(newId)
  }
  /*
  empiezo a hacer cambios
  */
  const [task, setTasks] = useState([])
  return (
    <div id='content' >
     <div id="bgFix" style={{backgroundImage: 'url(src/components/Menu-component/imgs/background'+fondo+'.png)'}}></div>
     <Menu bg={changeBg}/>
     <header className='cabecera'>
        <img src={logo} alt='Logo de la pagina web, "to do LIST"' height="200vp"/>
      </header>
      <TaskMaker/>
    </div>
  )
}

export default App