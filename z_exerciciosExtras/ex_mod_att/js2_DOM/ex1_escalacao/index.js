function addingAtScreen(){
  //button that add
  let addData = document.getElementById('addData')

  //adding event
  addData.addEventListener('click', addToScreen)  
  let ul = document.createElement('ul')
  
 
  function addToScreen(){
    //data
    let playerPosition = document.getElementById('playerPosition').value
    let playerName = document.getElementById('playerName').value
    let shirtNumber = document.getElementById('shirtNumber').value

    //body
    let body = document.getElementById('body')

    //content
    let li = document.createElement('li')
    li.textContent = `${playerPosition}: ${playerName}, camisa número ${shirtNumber}`
    li.id = shirtNumber
    ul.appendChild(li)
    body.append(ul)

    document.getElementById('playerPosition').value = ""
    document.getElementById('playerName').value = ""
    document.getElementById('shirtNumber').value = ""
  }


  //button that remove
  let removePlayerBtn = document.getElementById('removePlayerBtn')
  
  //adding remove event
  removePlayerBtn.addEventListener('click', removePlayerFromScreen)
  
  function removePlayerFromScreen(){
    let removePlayer = document.getElementById('removePlayer').value
    let playerToRemove = document.querySelector(`li[id='${removePlayer}']`)
    console.log(playerToRemove)
    ul.removeChild(playerToRemove)
    document.getElementById('removePlayer').value = ""
  }

}
addingAtScreen()
// o exercício funcionou como deveria 