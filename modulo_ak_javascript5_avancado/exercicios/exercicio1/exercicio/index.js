// let subb = document.getElementById('sub')

// function emaiAndPasswordToVerify(email, password){
//   let rightEmailPattern 
//   let safePasswordPattern
// }


// subb.addEventListener('click', function(ev){
//   ev.preventDefault()
//   let email = document.getElementById('emai').value
//   let password = document.getElementById('passw').value
//   let name = document.getElementById('name').value
//   console.log({
//     name,
//     email,
//     password
//   })
// })


let safepass = /[a-zA-Z\w\W]{1,8}/
let str = "aB@2asdf"
let strC = str.match(safepass)[0]
console.log(strC)



// meu teste no site regex101, a regra que defini foi essa -> [a-z|A-Z\w\W]{1,8} e apatentemente deu certo