/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./style.module.css"

export default function Profile(props){
  return (
    <div className={style.container}>
      <img className={style.avatar} src={props.avatar} alt={props.name} />
      <h2 className={style.name}>{props.name}</h2>
      <div>{props.bio}</div>
      <div>{props.phone}</div>
      <div>{props.email}</div>
      <div className={style.links}>
        <a href={props.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        <a href={props.linkedinUrl} target="_blank" rel="noreferrer">Linkedin</a>
        <a href={props.twitterUrl} target="_blank" rel="noreferrer">Twitter</a>
      </div>
    </div>
  )
}





//minha resolução

// import style from "./style.module.css"

// export default function Profile({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}){
//   return(
//   <>
//     <div className={style.profileContainer}>
//       <img src={avatar} alt="foto de perfil" className={style.img}/>
//       <div className={style.divInfos}>
//         <h2 className={style.infos}>{name}</h2>
//         <p className={style.infos}>{bio}</p>
//         <p className={style.infos}>{phone}</p>
//         <p className={style.infos}>{email}</p>
//       </div>
//       <div className={style.divBtn}>
//         <button className={style.btn}><a className={style.link}  href={githubUrl} target="_blank" rel="noreferrer">GitHub</a></button>
//         <button className={style.btn}><a className={style.link} href={linkedinUrl} target="_blank" rel="noreferrer">Linkedin</a></button>
//         <button className={style.btn}><a className={style.link}  href={twitterUrl} target="_blank" rel="noreferrer">Twitter</a></button>
//       </div>
//     </div>
//   </>
//   )
// }