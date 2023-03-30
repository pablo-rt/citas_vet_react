import {useEffect, useState} from "react"
import Error from "./Error"

// rafce -comando para crear el component rapido
const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  // reglas de hooks
  // van arriba del todo, adentro del componente. ni dentro de condicionales ni despues del return
  const [nombre, setNombre] = useState('')
  const [humano, setHumano] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  // La dependencia es Paciente, y se ejecuta cada vez que haya un cambio en Paciente
  useEffect(()=> {
    if( Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setHumano(paciente.humano)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  

  

  const generarID = () => {
      const medioHas = Math.random().toString(36).substring(2)
      const otroMedioHash = Date.now().toString(36)
      return medioHas + otroMedioHash 
    }
  
  //funcion para manejar lo que pasa cuando se quiere hacer submit del form
  const handleSubmit = (evt) => {
      evt.preventDefault()
      if ([nombre, humano, email, fecha, sintomas].includes('')){
        setError(true)
        return
      }
      setError(false)

      //construyo objeto paciente
      const objetoPaciente = {nombre, humano, email, fecha, 
        sintomas,
        id: generarID()}
      

      if(paciente.id){// si hay id esta editando el paciente
        
        objetoPaciente.id = paciente.id //esta asignando el id del paciente que viene por props al objetoPaciente

        // busca en la lista de pacientes el id que coincida para saber cual actualizar
        const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === 
          paciente.id ? objetoPaciente : pacienteState)
        
        setPacientes(pacienteActualizado)
        setPaciente({})

      }else{
        //creando paciente
        objetoPaciente.id = generarID()
        setPacientes([...pacientes, objetoPaciente]) // agrega el paciente a la lista de pacientes
      }

      

      //Vaciar form
      setNombre('')
      setHumano('')
      setEmail('')
      setFecha('')
      setSintomas('')
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center">Formulario</h1>
      <p className="text-lg mt-5 text-center mb-10">Aniade pacientes {''}
        <span className="text-indigo-600 font-bold">y administales</span>
      </p>
      <form onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-grey-700 uppercase font-bold">
            Nombre Mascota
          </label>
          
          <input type="text"
          id="mascota"
          placeholder="Nombre de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value = {nombre}
          onChange = { (evt) => setNombre(evt.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="humano" className="block text-grey-700 uppercase font-bold">
            Nombre del Humano
          </label>
          
          <input type="text"
          id="humano"
          placeholder="Nombre del humano"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value = {humano}
          onChange = { (evt) => setHumano(evt.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-grey-700 uppercase font-bold">
            Email de contacto
          </label>
          
          <input type="email"
          id="email"
          placeholder="Email de contacto"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value = {email}
          onChange = { (evt) => setEmail(evt.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="FechaAlta" className="block text-grey-700 uppercase font-bold">
            Fecha de alta
          </label>
          
          <input type="date"
          id="FechaAlta"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value = {fecha}
          onChange = { (evt) => setFecha(evt.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">
            Sintomas
          </label>
          
          <textarea
          id="sintomas"
          placeholder="descripcion de los sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value = {sintomas}
          onChange = { (evt) => setSintomas(evt.target.value)}
          />
        </div>
        <div>
          <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
           hover:bg-indigo-700 cursor-pointer transition-all" 
           value={paciente.id ?' Editar Paciente' : 'Agregar'}/>
        </div>
      </form>
    </div>
  )
}

export default Formulario

