
let resultInput = document.getElementById("result")

export function calculate(){
  resultInput.value = "ERROR"
  resultInput.classList.add("error")
  let result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
}

export function copyResult (ev){
  let button = ev.currentTarget
  if (button.innerText === "copy"){
    button.innerText = "Copied!"
    button.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)
}else{
  button.innerText = "copy"
  button.classList.remove("success")
}
}