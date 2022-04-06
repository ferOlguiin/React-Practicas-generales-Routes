import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav navbar bg-success justify-content-around align-items-center">
      <Link className="btn btn-dark text-warning" to="/">Inicio</Link>
      <Link className="btn btn-dark text-warning" to="/RelojHooks">Reloj</Link>
      <Link className="btn btn-dark text-warning" to="/Referencias">Referencias</Link>
      <Link className="btn btn-dark text-warning" to="/Formulario">Formulario</Link>
    </nav>
  )
}

export default Navbar