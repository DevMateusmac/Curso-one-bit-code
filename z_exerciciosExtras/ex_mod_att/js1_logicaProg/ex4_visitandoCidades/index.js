  // function cities(){
  //   let confirmCities = prompt("Você já visitou alguma cidade?")
  //   let whichCity 
  //   let citiesCount = 0
  //   let citiesVisited = ""

  //   if(confirmCities == "sim"){
  //     whichCity = prompt("Qual cidade você visitou?")
  //     citiesVisited += whichCity
  //     citiesCount++

  //     confirmCities = prompt(`Você já visitou alguma outra cidade?`) 
  //     while(confirmCities !== 'nao'){
  //       whichCity = prompt("Qual cidade?")
  //       citiesVisited += ", " + whichCity
  //       citiesCount++
  //       confirmCities = prompt(`Você já visitou alguma outra cidade?`) 
  //     }
  //   }
  //   alert(`O número total de cidades foram ${citiesCount}, e as cidades foram: ${citiesVisited}`)
  // }
  // cities()
  
  //o meu exercício funcionou da maneira correta, abaixo farei com o meu código mesmo, a maneira mais curta, como eu queria ter feito, mas na hora confundi a lógica.
  
  function cities(){
    let confirmCities = prompt("Você já visitou alguma cidade?")
    let whichCity 
    let citiesCount = 0
    let citiesVisited = ""
    
    
    while(confirmCities !== 'nao'){
      whichCity = prompt("Qual cidade?")
      citiesVisited += ", " + whichCity
      citiesCount++
      confirmCities = prompt(`Você já visitou alguma outra cidade?`) 
    }
    
  alert(`O número total de cidades foram ${citiesCount}, e as cidades foram: ${citiesVisited}`)
}
// cities()