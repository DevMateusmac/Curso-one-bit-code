/* eslint-disable react/prop-types */

import style from "./style.module.css"

export default function LinkButton(props){
  return (
    <a className={style.wrapper} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  )
}