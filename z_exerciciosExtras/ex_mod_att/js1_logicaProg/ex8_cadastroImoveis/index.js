function creatingObject(){
  let properties = [
      
  ]

  let option 

  do{
    option = prompt(`Cadastro de imóveis\n\nImóveis cadastrados até agora: ${properties.length}\n\nO que deseja fazer?\n\n1 - Salvar um imóvel\n2 - Mostrar imóveis salvos\n3 - sair`)

    switch(option){
      case "1":
        let newProperty = saveNewProperty()
        properties.push(newProperty)
        break
      case "2":
        showPropertiesListed()
        break
      case "3":
        alert(`Eccerrando aplicativo...`)
        break
      default:
        alert(`Algo deu errado, tenten novamente!`)
    }
  }while(option !== "3")


  function saveNewProperty(){
    let propertyOwner = prompt(`Qual é o nome do proprietário?`)
    let roomQuantity = prompt(`Quantos quartos tem o imóvel?`)
    let bathroomQuantity = prompt(`Quantos banheiros tem o imóvel?`)
    let garage = prompt(`Este imóvel possui garagem?`)

    let propertyToAdd = {
      propertyOwner,
      roomQuantity,
      bathroomQuantity,
      garage
    }
    return propertyToAdd
  }


  function showPropertiesListed(){
    if(properties.length === 0){
      alert(`Não há imóveis cadastrados até o momento!`)
    }else{
      let list = ""
      properties.forEach(property => {
        list += `Proprietário da casa: ${property.propertyOwner}\nQuantidade de quartos: ${property.roomQuantity}\nQuantidade de banheiros: ${property.bathroomQuantity}\nPossui garagem: ${property.garage}\n\n`
      })
      alert(`Imóveis listados até agora:\n\n${list}`)
    }
  }
}
// creatingObject()
//até aqui funcionou certinho o que pedia

/*
Uma maneira ainda mais simples de criar o objeto, seria colocar direto as propriedades na declaração do atributo no objeto, segue a minha forma, e a forma do professor

  *******************minha forma*****************

    let propertyOwner = prompt(`Qual é o nome do proprietário?`)
    let roomQuantity = prompt(`Quantos quartos tem o imóvel?`)
    let bathroomQuantity = prompt(`Quantos banheiros tem o imóvel?`)
    let garage = prompt(`Este imóvel possui garagem?`)

    let propertyToAdd = {
      propertyOwner,
      roomQuantity,
      bathroomQuantity,
      garage
    }
    return propertyToAdd
  

  *****************forma do professor****************

  (aqui vem  a declaração e atribuição de atributos, no caso vou inserir novos atributos no objeto)

  let propertyToAdd = {

  }
  propertyToAdd.propertyOwner = prompt(`Qual é o nome do proprietário?`)
  propertyToAdd.roomQuantity = prompt(`Quantos quartos tem o imóvel?`)
  propertyToAdd.bathroomQuantity = prompt(`Quantos banheiros tem o imóvel?`)
  propertyToAdd.garage = prompt(`Este imóvel possui garagem?`)
  
*/