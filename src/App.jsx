import Formulario from "./components/Formulario"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

useEffect(()=>{// funcion para cargar en la lista de pacientes lo que este en localstorage.
  
  const obtenerListaPacientes = () => {
    console.log(pacientes, 'lista de pacientes')
    const listaPAcientes = JSON.parse(localStorage.getItem('pacientes')) ?? [] // si no existe esa key, asigna un array vacio
    setPacientes(listaPAcientes)
  
  }
  obtenerListaPacientes()
}, [])// no lleva dependencia porque queremos que se ejecute solo una vez.

  useEffect(()=>{// funcion para almacenar en localstorage la lista de pacientes, se ejecuta cada vez
    //que hay un cambio en la lista.
      
    localStorage.setItem('pacientes', JSON.stringify(pacientes))

  },[pacientes])
  

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}/>
        
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
     </div>
  )
}

export default App
