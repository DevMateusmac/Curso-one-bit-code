// depois de cadastrar, o form deve ser limpado

//se eu declarar esses elementos fora da função, o .value não funciona, tem anotado sobre isso no notion sobre dom 




let addAtScreen = document.getElementById('addAtScreen')
let addedHousesList = document.getElementById('addedHousesList')


addAtScreen.addEventListener('click', () => {
  let typeOfHouse = document.getElementById('typeOfHouse').value
  let area = document.getElementById('area').value
  let rented = document.getElementById('rented').value
  
  let li = document.createElement('li')
  let br = document.createElement('br')
  
  let deleteLine = document.createElement('button')
  deleteLine.textContent = "Remover"

  deleteLine.addEventListener('click', ()=> {
    deleteLine.parentNode.remove()
    addedHousesList.removeChild(br)
  })

  
  if(rented == "yes"){
    let rentedSpan = document.createElement('span')
    rentedSpan.textContent = "Alugado!"
    rentedSpan.classList.add("mark")

    let def = ` Tipo do imóvel: ${typeOfHouse},  Área do imóvel: ${area}m² `
      
    li.append(rentedSpan, def, deleteLine)
       
  }else{
    li.textContent = `Tipo do imóvel: ${typeOfHouse},  Área do imóvel: ${area}m² `
    li.append(deleteLine)
  }
  addedHousesList.append(br, li)  

  typeOfHouse = document.getElementById('typeOfHouse').value = ''
  area = document.getElementById('area').value = ''
})


//nesse exercício o professor usou classes para resolver, enquanto eu fiz direto com funções