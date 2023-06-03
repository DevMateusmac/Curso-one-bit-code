/* eslint-disable react/prop-types */
import style from "./style.module.css"

export default function Button({text}) {
  return ( 
  <button className={style.wrapper}>{text}</button>
  )
}