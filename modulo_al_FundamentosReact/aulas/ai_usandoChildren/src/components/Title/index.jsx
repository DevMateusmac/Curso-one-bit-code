/* eslint-disable react/prop-types */

import style from "./style.module.css"

export default function Title(props){
  return(
    <h2 className={style.wrapper}>{props.children}</h2>
  )
}