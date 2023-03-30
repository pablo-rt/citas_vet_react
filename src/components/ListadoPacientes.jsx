
import { useEffect } from "react"
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? //evaluacion de si hay o no pacientes en la lista
        <> 
        <h2 className="font-black text-3xl text-center">Listado Pacientes </h2>
        <p className="text-lg mt-5 mb-10 text-center">Administa tus {''}
          <span className="text-indigo-600  font-bold">
          pacientes y citas
          </span>
        </p> 
        { pacientes.map( paciente =>
            <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
            />
          )
        }
        </> 
        : //si no hay pacientes:
        <>
        <h2 className="font-black text-3xl text-center">Agrega Pacientes</h2>
        <p className="text-lg mt-5 mb-10 text-center">Y administrales {''}
          <span className="text-indigo-600  font-bold">
          aqui !
          </span>
        </p> 
        </>
        }
        
          
          
      </div>
  )
}

export default ListadoPacientes
