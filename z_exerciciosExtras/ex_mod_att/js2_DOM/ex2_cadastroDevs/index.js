let formData = document.getElementById('formData')
let addTechBtn = document.getElementById('addTechBtn')
let techData = document.getElementById('techData')
let devName = document.getElementById('devName')
let rowCounter = 0
let registeredDev = []

// label for recebe o mesmo nome e id que o input que representa

function createLabel(labelFor, labelText){
  let label = document.createElement('label')
  label.htmlFor = labelFor
  label.textContent = labelText
  return label
}

function createInput(inputName, inputId, inputType, inputClass, value){
  let input = document.createElement('input')
  input.name = inputName
  input.id = inputId
  input.type = inputType
  input.classList = inputClass
  input.value = value
  return input
}


function createBr(){
  return document.createElement('br')
}


function createLi(liId, liClass){
  let li = document.createElement('li')
  li.id = liId
  li.classList = liClass
  return li
}



addTechBtn.addEventListener('click', ev =>{
  ev.preventDefault()
  rowCounter++

  let li = createLi(`row-${rowCounter}`, "linha") 

  let techLabel = createLabel(`tech-${rowCounter}`, `Tecnologia: `)
  let techInputText = createInput(`tech-name`, `tech-${rowCounter}`, "text", "inputTextTech", "")

  let xpLabel = createLabel(`labelXp-${rowCounter}`, " Experiencia: ")

  let techXpInputRadio1 = createInput(`exp-radio-${rowCounter}`, "exp-0to2", "radio", "inputRadioXp", "0-2 anos")
  let techXp0to2 = createLabel("exp-0to2", "0-2 anos")

  let techXpInputRadio2 = createInput(`exp-radio-${rowCounter}`, "exp-2to4", "radio", "inputRadioXp", "2-4 anos")
  let techXp2to4 = createLabel("exp-2to4", "2-4 anos")

  let techXpInputRadio3 = createInput(`exp-radio-${rowCounter}`, "exp-5", "radio", "inputRadioXp", "5+ anos ")
  let techXp5 = createLabel("exp-5", "5+ anos ")

  let removeLineButton = document.createElement('button')
  removeLineButton.textContent = "Remover tecnologia"
  removeLineButton.addEventListener('click', ev =>{
    ev.preventDefault()
    ev.currentTarget.parentNode.remove()
        
    rowCounter = 0
    let allLis = document.querySelectorAll('.linha')
    allLis.forEach(li => {
      rowCounter++
      li.id = `row-${rowCounter}`
    })
  })

  let br1 = createBr()

  li.append(techLabel, techInputText, xpLabel, techXpInputRadio1, techXp0to2, techXpInputRadio2, techXp2to4, techXpInputRadio3, techXp5, removeLineButton, br1)
  techData.appendChild(li)
})



formData.addEventListener('submit', ev =>{
  ev.preventDefault()

  let allLis = document.querySelectorAll('.linha') // colocar as duas funcionalidades de baixo num foreach dessas linhas aqui, e separar na chave valor, do jeito que eu estava tentando fazer aqui em baixo
  let techs = []
  allLis.forEach(li => {
    let allTechInputs = document.querySelector('#' + li.id + ' input[name="tech-name"]').value
    let allTechRadios = document.querySelector('#' + li.id + ' input[type="radio"]:checked').value
    techs.push({language: allTechInputs, experience: allTechRadios})
  })
  
  let newDev = {
    name: devName.value,
    languages: techs
  }
  
  registeredDev.push(newDev)


  // remover dados e limpar input
  
  rowCounter = 0
  document.getElementById('devName').value = ''

  allLis.forEach(li => {
    li.remove()
  })  

  console.log(registeredDev)
})



/*

tentativa - não dinâmica 

let devName = document.getElementById('devName')
let addTechBtn = document.getElementById('addTechBtn')
let techData = document.getElementById('techData')

addTechBtn.addEventListener('click', addTech)

function addTech(ev){
  ev.preventDefault()

  let paragraph = document.createElement('p')

  let addtechLabel = document.createElement('label')
  addtechLabel.textContent = "Tecnologia: "

  let addtechInput = document.createElement('input')
  addtechInput.type = "text"

  let expetienceTitle = document.createElement('label')  
  expetienceTitle.textContent = " Tempo de experiencia: "

  let experienceRadio0to2 = document.createElement('input')
  experienceRadio0to2.type = "radio"
  experienceRadio0to2.name = "expBtn"
  let experienceRadio0to2Label = document.createElement('label')
  experienceRadio0to2Label.textContent = `0-2 anos`

  let experienceRadio3to4 = document.createElement('input')
  experienceRadio3to4.type = "radio"
  experienceRadio3to4.name = "expBtn"
  let experienceRadio3to4Label = document.createElement('label')
  experienceRadio3to4Label.textContent = `3-4 anos`

  let experienceRadio5 = document.createElement('input')
  experienceRadio5.type = "radio"
  experienceRadio5.name = "expBtn"
  let experienceRadio5Label = document.createElement('label')
  experienceRadio5Label.textContent = `5+ anos `

  let br = document.createElement('br')

  let removeLine = document.createElement('button')
  removeLine.textContent = "Remover tecnologia"

  removeLine.addEventListener('click', ev => {
    ev.preventDefault()
    // ev.currentTarget.parentNode.remove()
  })

  paragraph.append(addtechLabel, addtechInput, expetienceTitle, experienceRadio0to2, experienceRadio0to2Label, experienceRadio3to4, experienceRadio3to4Label, experienceRadio5, experienceRadio5Label, removeLine, br)

  techData.appendChild(paragraph)

  return console.log({
    addtechInput
  })
}


let registerDev = document.getElementById('registerDev')


registerDev.addEventListener('click', (ev) => {
  ev.preventDefault()
})

*/