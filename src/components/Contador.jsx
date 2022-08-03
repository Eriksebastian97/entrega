import React from 'react'



let contador = 0

    const sumar = ()=>{
        contador = contador + 1
    }
    
    const confirmar = ()=>{}
    
    const restar = ()=>{}


function Contador({onAdd,initial,stock}) {


  return (
    <div>
     <p>contador : {contador} </p>
     <button onClick={sumar}>sumar</button>
     <button onClick={confirmar}>confirmar</button>
     <button onClick={restar}>restar</button>
    </div>
  )
}


export default Contador