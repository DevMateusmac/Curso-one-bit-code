import { useState } from "react";
import style from "../components/Password/style.module.css"

 function passwordGenerator(){
  let password = ''
  let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=+_#ç!*&@'

  for(let i = 0; i < 20; i++){
    password += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
  }
  return password
}



export default function UsePassword(){
  const [contentSpan, setContentSpan] = useState('')
  const [borderButton1, setBorderButton1] = useState(style.btn)

  const [borderButton2, setBorderButton2] = useState(style.btn)
  const [valueButton2, setValueButton2] = useState('Copiar')

  const changeSpan = () =>{    
    setContentSpan(passwordGenerator)
    setBorderButton1(style.btnClicked)
    setValueButton2('Copiar')
    setBorderButton2(style.btn)
  }
  
  
  const changeBtn2 = () => {
    let passwordToCopy = document.getElementById('infoToCopy').textContent
    navigator.clipboard.writeText(passwordToCopy)

    setBorderButton2(style.btnClicked)
    setBorderButton1(style.btn)
    setValueButton2('Copiado!')

  }


  return {contentSpan, changeSpan, borderButton1, borderButton2, valueButton2, changeBtn2}
}