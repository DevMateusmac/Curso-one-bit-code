//button to add data
let addAtScreen = document.getElementById('addAtScreen')

//data
let address = document.getElementById('address')
let houseNumber = document.getElementById('houseNumber')
let hood = document.getElementById('hood')
let city = document.getElementById('city')
let houseArea = document.getElementById('houseArea')


//show data
let addedHouses = document.getElementById('addedHouses')
let ul = document.createElement('ul')


function getHousesData(){
  let li = document.createElement('li')
  let removeData = document.createElement('button')
  removeData.textContent = 'Remover'
  removeData.addEventListener('click', () => {
    removeData.parentNode.remove()
  })
  let br = document.createElement('br')

  li.append(address.value,', ', houseNumber.value,', ', hood.value, ', ', city.value, ', ', houseArea.value, ' ', removeData)
  ul.append(li, br)
  addedHouses.appendChild(ul)

  address.value = ''
  houseNumber.value = ''
  hood.value = ''
  city.value = ''
  houseArea.value = ''
}

addAtScreen.addEventListener('click', getHousesData)

// até aqui funcionou certo tudo o que pedia