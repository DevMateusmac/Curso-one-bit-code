let form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
  ev.preventDefault()

  let name = document.querySelector('input[name="name"]').value
  let addres = document.querySelector('input[name="address"]').value
  let breadType = document.querySelector('select[name="breadType"]').value
  let main = document.querySelector('input[name="main"]').value
  let observation = document.querySelector('textarea[name="observations"]').value

  let salad = ''
  document.querySelectorAll('input[name="salad"]:checked').forEach( item => {
    salad += ' - ' + item.value
  })

  console.log({
    name,
    addres,
    breadType,
    main,
    salad,
    observation
  })

  alert(
    "Pedido realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + addres +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + 
    "\nSalada: \n" + salad +
    "\nObservação: " + observation
  )
})