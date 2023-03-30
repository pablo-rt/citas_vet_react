

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  
  const {nombre, humano, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Esta seguro que desea eliminar este paciente?')
    if(respuesta){
      eliminarPaciente(id)
    }
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold m-3 text-grey-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold m-3 text-grey-700 uppercase">Humano: {''}
            <span className="font-normal normal-case">{humano}</span>
            </p>
            <p className="font-bold m-3 text-grey-700 uppercase">email: {''}
            <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold m-3 text-grey-700 uppercase">Fecha ingreso: {''}
            <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold m-3 text-grey-700 uppercase">sintomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="felx justify-evenly mt-10">
              {/* Boton de editar */}
                <button 
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded"
                onClick={()=> setPaciente(paciente)}>
                    Editar 
                </button>
              {/* Boton de eliminar */}
                <button 
                type="button"
                className="py-2 px-10 bg-red-400 hover:bg-red-700 text-white font-bold rounded"
                onClick={handleEliminar}>
                    Eliminar 
                </button>
            </div>
    </div>
  )
}

export default Paciente
