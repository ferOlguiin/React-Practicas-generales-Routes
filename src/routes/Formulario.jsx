import { useState } from "react"
import Swal from "sweetalert2"

const Formulario = () => {

    const initialState = {
        nombre: "",
        descripcion: "",
        estado: "pendiente",
        prioridad: false

    }

    const [todo, setTodo] = useState(initialState)
    
    const {nombre, descripcion, estado, prioridad} = todo

    const handleSubmit = e => {
        e.preventDefault()
        if(!nombre.trim()) {
            e.target[0].focus();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Coloca un nombre adecuado'
              })
            return
        }
        if(!descripcion.trim()) {
            e.target[1].focus();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Porfavor completa la descripción correctamente'
              })
            return
        }

        Swal.fire({
            icon: 'success',
            title: 'Bien hecho',
            text: 'Tu formulario se ha enviado correctamente!'
          })
    }

    const handleChange = e => {
        const {name, value, checked, type} = e.target

        setTodo((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

  return (
    <> 

        <div style={{height: "100vh"}} className="container d-flex justify-content-center align-items-center">

            <form onSubmit={handleSubmit} className="w-75">
                <h3 className="text-white text-center">Formulario con validaciones y alertas</h3>  
                <input 
                    type="text"
                    className="form-control mb-2"
                    name= "nombre"
                    placeholder="Ingrese nombre"
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea 
                    className="form-control mb-2"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select name="estado" value={estado} onChange={handleChange} className="form-control mb-2"  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="prioridad" checked={prioridad} onChange={handleChange} id="flexCheckDefault"/>
                    <label className="text-white form-check-label" htmlFor="flexCheckDefault">
                        Acepto los terminos y condiciones
                                    </label>
                </div>
                <button type="submit" className="btn btn-danger ">Agregar</button>
            </form>
        </div>
    </>
  )
}

export default Formulario