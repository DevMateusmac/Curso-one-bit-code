import { useEffect, useState } from "react";


function Counter(){
  const [counter, setCounter] = useState(0)

  
  useEffect(() => {
    alert("Chamando a API!")

    return () =>{
      alert("Chamada cancelada!")
    }
  }, [])

  return (
    <button
      onClick={() => setCounter((counter) => counter + 1)}
    >
      Contador: {counter}
    </button>
  )
}


export default function App(){
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>Conhecendo o useEffect</h1>
      <div>
        <input 
          type="checkbox" 
          id="show"
          value={show}
          onChange={() => setShow(state => !state)}
        />
        <label htmlFor="show">Exibir</label>
      </div>
      {
        show ? <Counter /> : null
      }
      <hr />

    </>
  )
}
