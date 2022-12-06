let input = document.getElementById("input")
let allowedKeys= ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


export function addBtnValue (charKeyBtn){
  charKeyBtn.addEventListener('click', function (){
    let value = charKeyBtn.dataset.value
    input.value += value
  })
}


export  function clearBtn (){
  input.value = ""
  input.focus()
}


export function keydownToaddNumbersAndEqual(ev){
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
}
