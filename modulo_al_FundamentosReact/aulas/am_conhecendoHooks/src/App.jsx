import './App.css'
import useCounter from './hooks/useCounter'

//

function App() {
  const counter = useCounter()// aqui eu poderia desestruturar também {count, increment}
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}> 
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
