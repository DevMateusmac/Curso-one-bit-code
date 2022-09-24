function show(){
  let contactList = document.getElementById('contact-list')
  console.log(contactList)

  let listelements = document.getElementsByTagName('li')
  console.log(listelements)

  let contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)

  let contacts = document.querySelectorAll('#contact-input > li > label')
  console.log(contacts)

  let contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  let firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)
}