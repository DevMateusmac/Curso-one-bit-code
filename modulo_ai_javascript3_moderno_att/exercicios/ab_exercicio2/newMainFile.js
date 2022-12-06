// variables


//imports
import { calculate, copyResult } from "./calculateModule.js" // realiza e copia os resultados dos calculos
import {switchTheme} from "./DOM_CSSModules.js" // altera o tema da página
import {addBtnValue, keydownToaddNumbersAndEqual, clearBtn} from "./keyboardModule.js" // funcionalidades do teclado


// code

//calculate
document.getElementById("equal").addEventListener("click", calculate)

//HTML
document.querySelectorAll(".charKey").forEach(addBtnValue)
document.getElementById("clear").addEventListener("click", clearBtn)
input.addEventListener('keydown', keydownToaddNumbersAndEqual)
document.getElementById("copyToClipboard").addEventListener("click", copyResult)

//css 
document.getElementById("themeSwitcher").addEventListener("click", switchTheme)