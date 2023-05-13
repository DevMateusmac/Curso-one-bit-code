// manipulando estilos diretamente pela propriedade style
function useLightTheme(){
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme(){
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor = '#212529'
}

// manipulando estilos através das classes utilizadas pelo css
function switchTheme() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

// adicionando os eventos 
document.addEventListener('click', useLightThemdocument.getElementById('lightBtn'))
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)