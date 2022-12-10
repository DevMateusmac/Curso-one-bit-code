
let devsList = []

let form = document.getElementById('candidate-registration')
let insertTech = document.getElementById('insert-tech')
let techItens = document.getElementById('techItens')

let indexCount = 0

insertTech.addEventListener('click', ev => {
  ev.preventDefault()

  let index = indexCount
  indexCount++

  let techLi = document.createElement('li')
  techLi.id = "item"

  let newInputLang = document.createElement('input')
  newInputLang.type = "text"
  newInputLang.id = "language" 

  let xpRadio1 = document.createElement('input')
  xpRadio1.type = "radio"
  xpRadio1.id = "radioIndex" + index
  xpRadio1.value = "0-2 anos"
  let labeXp1 = document.createElement('label')
  labeXp1.name = "techs"
  labeXp1.innerText = "0-2 anos "

  let xpRadio2 = document.createElement('input')
  xpRadio2.type = "radio"
  xpRadio2.id = "radioIndex" + index
  xpRadio2.value = "3-4 anos" 
  let labeXp2 = document.createElement('label')
  labeXp2.name = "techs"
  labeXp2.innerText = "3-4 anos "

  let xpRadio3 = document.createElement('input')
  xpRadio3.type = "radio"
  xpRadio3.id = "radioIndex" + index
  xpRadio3.value = "5+ anos" 
  let labeXp3 = document.createElement('label')
  labeXp3.name = "techs"
  labeXp3.innerText = "5+ anos "

  let deleteLang = document.createElement('Button')
  deleteLang.id = "deleteLang"
  deleteLang.type = "button"
  deleteLang.innerText = "Excluir"

  let br = document.createElement('br')
  br.id = "br"
  
  
  techLi.appendChild(newInputLang)
  techLi.appendChild(xpRadio1)
  techLi.appendChild(labeXp1)

  techLi.appendChild(xpRadio2)
  techLi.appendChild(labeXp2)

  techLi.appendChild(xpRadio3)
  techLi.appendChild(labeXp3)

  techLi.appendChild(deleteLang)

  techItens.appendChild(techLi)
  techItens.appendChild(br)

  deleteLang.addEventListener('click', () => {
    techItens.removeChild(techLi)
    techItens.removeChild(br)
    // console.log(techItens)
  })
  // console.log(techItens)
  // console.log(newInputLang)
  // console.log(xpRadio1)
  // console.log(labeXp1)
  // console.log(xpRadio2)
  // console.log(labeXp2)
  // console.log(xpRadio3)
  // console.log(labeXp3)
})


form.addEventListener('submit', ev => {
  ev.preventDefault()
  let candidateName = document.getElementById('candidateName').value
  let techItens = document.getElementById('techItens')
  let br = document.getElementById('br')
  let li = document.querySelectorAll('#item')
  let techs = []

  li.forEach(function(li){
    let lang = document.getElementById('language').value // pegar a  ling aqui na resolução ele fez pelo query, mas no meu caso tentarei fazer pelo id nos dois casos aqui
    let xpLang = document.querySelector('#' + li.id + 'input[type="radio"]:checked').value// pegar a xp
    techs.push({name: lang}, {exp: xpLang})
  })
  let newDev = {CandFullName: candidateName, technologies: techs}
  devsList.push(newDev)

  techItens.removeChild(br)
  candidateName.value = ""
  li.forEach(function(li){
    li.remove()
  })
  console.log(devsList)
})