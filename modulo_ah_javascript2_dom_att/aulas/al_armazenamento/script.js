// Usando o sessionStorage

document.getElementById('sessionBtn').addEventListener('click', function(){
  let input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
  let info = sessionStorage.getItem('info')
  alert('A informação salva é: ' + info)
  alert('A informação salva é: ' + sessionStorage.getItem('info'))
})

// Usando o localSorage

document.getElementById('localBtn').addEventListener('click', function(){
  let input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
  let t = localStorage.getItem('text')
  alert('O texto salvo no local storage é: ' + t)
})


// Usando cookies

document.getElementById('cookieBtn').addEventListener('click', function(){
  let input = document.getElementById('cookie')
  // cookieName=value; expires=UTCStringDate; path=/;
  let cookie = 'info=' + input.value + ';'
  let expiration = 'expires=' + new Date(2022, 10, 9)+ ';'
  let path = 'path/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

// segundo exemplo de cookie

document.getElementById('cookie2Btn').addEventListener('click', function(){
  let input = document.getElementById('cookie2')
  // cookieName=value; expires=UTCStringDate; path=/;
  let cookie = 'text=' + input.value + ';'
  let expiration = 'expires' + new Date(2022, 10, 9)+ ';'
  let path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})