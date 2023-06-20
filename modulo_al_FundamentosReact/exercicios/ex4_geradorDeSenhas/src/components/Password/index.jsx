import style from "./style.module.css"
import UsePassword from "../../hooks/usePassword"

export default function getPassword(){
  const {contentSpan, changeSpan, borderButton1, borderButton2, valueButton2, changeBtn2} = UsePassword()
  return (
    <>
      <div className={style.container}>
      <h1 className={style.title}>Gerador de senhas</h1>
      <div className={style.btnContainer}>
        <button id="generateBtn" className={borderButton1} onClick={changeSpan}>Gerar!</button>
        <button id="copyBtn" className={borderButton2} onClick={changeBtn2}>{valueButton2}</button>
      </div>
      <span id="infoToCopy" className={style.password}>{contentSpan}</span>
      </div>
    </>
  )
}

/*
Este exercício funcionou como deveria com tudo o que foi pedido, mas eu interpretei a imagem do enunciado um pouco errada,
o professor aproveitou a estilização padrão do react, e as animações dos botões eram hover e nao usestate.
E também o professor fez tudo no arquivo app por se tratar de uma funcionalidade pequena. Sendo assim vou
a resolução comentada aqui abaixo.

import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")

  function generate(){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++){
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }
  function copyToClipboard(){
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  return(
    <div>
      <h1>Gerador de senhas</h1>
      <button onClick={generate}>Gerar!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}
  export default App
*/