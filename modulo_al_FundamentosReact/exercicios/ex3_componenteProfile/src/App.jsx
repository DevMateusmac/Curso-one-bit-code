import Profile from "./components/Profile"
import avatarImg from "./assets/avatar.jpg"

export default function App(){
  return (
    <div className="app">
      <Profile 
        avatar={avatarImg}
        name="John Doe"
        bio="Full-stack javascript developer at Acme Inc"
        email="john.doe@email.com"
        phone="+5511987654321"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}



//minha resolução, o mesmo caso do outro exercício, ficou funcionando da forma que deveria e do jeito que foi pedido, mas claro, um pouco diferente, por isso vou anotar a forma que o professor fez, e a critério de reforço, farei o uso das props sem desestruturação

// import Profile from "./components/Profile"
// import profilePic from "./assets/avatar.jpg"

// function App() {
//    return (
//     <>
//       <Profile avatar={profilePic} name="Mateus Maciulevicius" bio="Front-end developer at..." phone="+5515999999999" email="dev.developer@gmail.com" githubUrl="https://github.com" linkedinUrl="https://www.linkedin.com/feed/" twitterUrl="https://twitter.com" />
//     </>
//   )
// }

// export default App
