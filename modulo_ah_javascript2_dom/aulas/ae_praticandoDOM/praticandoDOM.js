function addContact(){
  let contactSection = document.getElementById('contacts-list')

  let h3 = document.createElement('h3')
  h3.innerText = 'Contato'

  let ul = document.createElement('ul')

  let nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  let nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  let phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  let phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'fullname'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  let addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="address">Endereço: </label>'
  let addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)
}

function removeContact(){
 let contactSection = document.getElementById('contacts-list')

 let titles = document.getElementsByTagName('h3')
 let contacts = document.getElementsByTagName('ul')
 contactSection.removeChild(titles[titles.length -1])
 contactSection.removeChild(contacts[contacts.length -1])
 //para remover o elemento é preciso colocar o tamanho do elemento -1, pois como é conhecido, o índice começa em 0, e no caso essa funcionalidade remove o último elemento
}