import { useEffect, useState } from "react"

    // Aca hacemos un componente y lo destructuramos con el "hora" para no estar poniendo prop . hora 
    // y despues con el retorno le indicamos q retorne la variaable hora

function Reloj({hora}) {
    return <h3 className="text-center text-white">La hora es: {hora}</h3>
} 


const RelojHooks = () => {
            // Este primer estado es para la hora
    const [hora, setHora] =  useState(new Date().toLocaleTimeString());
            //    Este variable es para saber si esta visible o no
    const [visible, setVisible] = useState(false);


//  Aca creamos un array function, no necesitamos el this. porq no estamos dentro de una class
//  sino que estamos dentro de una function. 


//  De todas maneras estas dos array functions las vamos a reemplazar por un tictac y simplificamos el code


// const iniciar = () => {};
// const detener = () => {};


// Aca creamos el efecto, solo declaramos una varible q es la de temporizador y en el array ponemos la variable
// visible (q es la q cambia gracias a los botones de iniciar y detener). Entonces solo cuando cambie la variable visible
// se va a ejecutar lo q este dentro de efect.

// lUEGO DE CREADO EL USE EFFECT colocamos un if en donde si visible es true, el temporizador va a ser igual a ejecutar el set interval
// para q se ejecute o sea se actualiza a cada segundo, pero ¿que va a actualizar?, va a actualizar la variable
// hora con la variable setHora del use state. A ese setHora le pasamos el nuevo valor q va a aparecer en nuestro Reloj
// con el new Date y tiempo regional. Seguido a eso agregamos un else con un clear interval para cuando el componente no este visible, y por
// fuera de los if agregamos un RETURN en donde limpiamos el intervalo nuevamente para asegurarnos de q el temporizador se limpie.
// TODO ESTO SOLO SE VA A EJECUTAR CUANDO SE DETECTE UN CAMBIO EN LA VARIABLE "VISIBLE".  
useEffect(() => {
    let temporizador; 

    if (visible) {
    temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
    },1); 
        } else {
              clearInterval(temporizador);
}

    return () => {
        // console.log("fase de desmontaje");
        clearInterval(temporizador);    
}

},[visible]);


  return (
    <>
        <div style={{height: "100vh"}} className="d-flex justify-content-center align-items-center flex-column">
            <h2 className="text-center text-white">Reloj con hooks</h2>
            <h2 className="text-center">
                {visible && <Reloj hora={hora}/>}
            </h2>
        {/* Aca a los botones les paso el tictac ya que recibe un valor q va a ser true o false, entonces eso es lo que
        le va a dar funcionalidad a los botones ya que van a recibir ese valor. */}
            <div className="d-flex justify-content-center align-items-center m-1">
                <button className="btn btn-info m-2" onClick={() => setVisible(true)}>Iniciar</button>
                <button className="btn btn-info m-2" onClick={() => setVisible(false)}>Detener</button>
            </div>
        </div>
    </>

  )
}

export default RelojHooks