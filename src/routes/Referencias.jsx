import { useRef, useState } from "react"


const Referencias = () => {

    const [clase, setClase] = useState(false);

    let refMenu = useRef(),
    refMenuBtn = useRef();

    let refNavbar = useRef(),
    refNavbarBtn = useRef();

    // console.log(refMenu, refMenuBtn);

    const handleToggleMenu = () => {
        // aca dentro del if ponemos primero la refencia al elemento que deseamos en este caso el boton, pero hay q tener en cuenta q con el ref, este btn se convierte en un objeto q esta dentro del objeto current. Entonces para usar la referencia tenemos q llamar al boton q esta en current de la manera en la q lo escribi. Esto q escribi se lee simple si el boton es igual a menu esa palabra se cambia por cerrar y los elementos del menu se hacen visibles, si vuelvo a clickear vuelve a su estado normal ocultandose todo.
        if (refMenuBtn.current.textContent === "Menú") {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "flex";
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    }

    const handleToggleNavbar = () => {
        if (clase === false) {
            setClase(true);
            refNavbarBtn.current.textContent = "Dejar de mostrar";
        } else {
            setClase(false);
            refNavbarBtn.current.textContent = "Navbar";
        }
    }

  return (
    <>
        <div style={{height: "100vh"}} className="container d-flex justify-content-center align-items-center flex-column">
            <h3 className="text-white text-center">Referencias: LOGICA PARA OCULTAR Y MOSTRAR UN NAV</h3>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary m-1" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
                    <button className="btn btn-primary m-1" ref={refNavbarBtn} onClick={handleToggleNavbar}>Navbar</button>
                </div>
            <nav ref={refMenu} style={{display: "none"}} className="p-3 text-white">
                <h6 className="p-2 m-1 bg-success rounded">Home</h6>
                <h6 className="p-2 m-1 bg-success rounded">About us</h6>
                <h6 className="p-2 m-1 bg-success rounded">Frequent questions</h6>
                <h6 className="p-2 m-1 bg-success rounded">Contact</h6>
            </nav>
            <div ref={refNavbar} className={`${clase ? "d-flex": "d-none"}`}>
                <h2 className="text-white text-center">Clase aplicada al boton con useRef</h2>
            </div>
        </div>
    </>
  )
}

export default Referencias