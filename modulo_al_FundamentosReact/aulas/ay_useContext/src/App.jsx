import UserContext from "./contexts/UserContext"
import Container from "./components/Container"
import Header from "./components/Header"

export default function App(){

  const user = {
    name: "João",
    email: "joao@email.com"
  }

  return (
    <>
    <UserContext.Provider value={user}>
      <Header />
      <h1>Usando Contexto</h1>
      <Container>
        <p>este é o app com contexto</p>
      </Container>
    </UserContext.Provider>
    <div>
      {/* aqui não há acesso ao contexto */}
    </div>
    </>
  )
}