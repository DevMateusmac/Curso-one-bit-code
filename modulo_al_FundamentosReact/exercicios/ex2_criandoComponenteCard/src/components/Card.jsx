import posterImg from "../../public/starwars.jpg"
import style from "./style.module.css"

export default function Card(){
  return (
    <>
    <div className={style.cardcontainer}> 
      <img className={style.poster} src={posterImg} alt="star wars poster" />
      <div>
        <h2>Pôster: Star Wars (1977)</h2>
        <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempoos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button>Comprar agora</button>
      </div>
    </div>
    </>
  )
}







// minha resolução 

// import style from "./Card.module.css"

// export default function Card(){
//   return (
//     <>
//     <div className={style.cardContainer}>
//     <div>
//       <img src="../public/starwars.jpg" alt="starwars" className= {style.img} />
//     </div>
    
//     <div>
//       <h1>Pôster: Star Wars (1977)</h1>
//       <p className={style.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempoos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
//       <button className={style.btn}>Comprar agora</button>
//     </div>
//     </div>
//     </>
//   )
// }