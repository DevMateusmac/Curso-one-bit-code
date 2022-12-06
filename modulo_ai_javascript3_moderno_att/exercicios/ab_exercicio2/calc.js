let main = document.querySelector("main")
let root = document.querySelector(":root")
let input = document.getElementById("input")
let resultInput = document.getElementById("result")

let allowedKeys= ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(function (charKeyBtn){ // foi
  charKeyBtn.addEventListener('click', function (){
    let value = charKeyBtn.dataset.value
    input.value += value
  })
})

document.getElementById("clear").addEventListener("click", function (){ // foi 
  input.value = ""
  input.focus()
})

input.addEventListener('keydown', function(ev){ // foi 
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace"){
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter"){
    calculate()
  }
})

document.getElementById("equal").addEventListener("click", calculate)//ja foi

function calculate(){ //ja foi
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  let result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}

document.getElementById("copyToClipboard").addEventListener("click", function (ev){ // ja foi
  let button = ev.currentTarget
  if (button.innerText === "copy"){
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
}else{
  button.innerText = "copy"
  button.classList.remove("success")
}
})

document.getElementById("themeSwitcher").addEventListener("click", function (){ // ja foi
  if(main.dataset.theme === "dark"){
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  } else{
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})

