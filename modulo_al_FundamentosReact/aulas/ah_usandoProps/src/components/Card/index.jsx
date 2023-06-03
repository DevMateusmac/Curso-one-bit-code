/* eslint-disable react/prop-types */
import style from "./style.module.css"

export default function Card ({title, poster}){
  return (
    <>
    <div className={style.cardcontainer}>
      <img className={style.poster} src={poster} alt={title} />
      <div>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button className={style.button}>Comprar agora</button>
      </div>
    </div>
    </>
  )
}