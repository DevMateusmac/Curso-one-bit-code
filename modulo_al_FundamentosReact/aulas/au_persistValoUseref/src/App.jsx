import { useRef } from "react"
import { useState } from "react"
import RefExample from "./RefExample"

export default function App() {

  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = () =>{
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }

  return (
    <>
      <h1>Exemplo de useRef com o DOM</h1>
      <RefExample />
      <hr />

      <h1>Conhecendo o useRef</h1>
      <hr />

      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button 
        onClick={() => variable++}
      >
        Aumentar Variável
      </button>
      <button 
        onClick={() => ref.current++}
      >
        Aumentar ref
      </button>
      <button
        onClick={() => setState(state => state + 1)}
      >
        Aumentar State
      </button>
      <hr />
      <button onClick={showValues}>Exibir valores</button>
    </>
  )
}

 
