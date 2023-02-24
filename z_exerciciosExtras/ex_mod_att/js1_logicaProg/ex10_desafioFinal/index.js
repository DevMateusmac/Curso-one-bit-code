function vacantJob(){

  let vacancies = [
    {
      vacancyName: "Técnico em informatica",
      vacancyDescription: "cuidará da parte de formatação dos pc's, infraestrutura de cabos, impressoras...",
      limitDate: "15/02/2023",
      candidateArea:{
        candidateQuantity: 2,
        candidates: ["Mario", "Jason"]
      }
    },
  ]

  let chosenOption 

  do{
    chosenOption = menu()

    switch(chosenOption){
      case "1": 
        let showList = listAvailableVacancy() 
        if(vacancies.length !== 0){
          alert(showList)
        }
        break
      case "2": 
        let newVacancyToAdd = createNewVacancy() 
        vacancies.push(newVacancyToAdd)
        break
      case "3": 
        visualizeVacancy() 
        break
      case "4": 
      enrollCandidate()
        break
      case "5": 
      deleteVacancy() 
        break
      case "6": 
        alert(`Encerrando...`) 
        break
      default:
        alert(`Algo deu errado, tente novamente!`)
    }


  }while(chosenOption !== "6")

  function menu(){
    let option = prompt(`Sistemas de vagas de emprego\nO que deseja fazer?\n\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair\n\nSelecione a opção pelo número correspondente`)
    return option
  }


  function listAvailableVacancy(){
    let list = ""
    if(vacancies.length === 0){
      alert(`Ainda não há vaga de emprego registrada!`)
    }else{
      vacancies.forEach((vacancy, i) => {
        list += `Vaga: ${i + 1}\nNome da vaga: ${vacancy.vacancyName}\nQuantidade de candidatos: ${vacancy.candidateArea.candidateQuantity}\n\n`
      })
    }
    return list
  }

  function createNewVacancy(){
    let newVacancy = {
    }
    newVacancy.vacancyName = prompt(`Qual é o nome da vaga?`)
    newVacancy.vacancyDescription = prompt(`Coloque uma descrição para esta vaga`)
    newVacancy.limitDate = prompt(`Qual é a data para a entrevista?`)
    newVacancy.candidateArea = {
      candidateQuantity: 0,
      candidates: []
    }
    return newVacancy
  }

  function visualizeVacancy(){
    let vacancyToVisualize = listAvailableVacancy()
    let vacancyID = prompt(`Qual vaga você deseja visualizar?\n\n${vacancyToVisualize}`)
    let foundVacancy = vacancies[vacancyID - 1] 

    let list = ""
    foundVacancy.candidateArea.candidates.forEach((candidate, i) => list += `${i + 1} - ${candidate}\n`) 

    alert(`Informações da vaga:\n\nÍndice: ${vacancies.indexOf(foundVacancy)}\nNome da vaga: ${foundVacancy.vacancyName}\nDescrição: ${foundVacancy.vacancyDescription}\nData de entrevista: ${foundVacancy.limitDate}\nNúmero de candidatos: ${foundVacancy.candidateArea.candidateQuantity}\n\nNome de todos os candidatos: \n${list}`)
  }


  function enrollCandidate(){
    let vacancyToVisualize = listAvailableVacancy()
    let vacancyID = prompt(`Qual vaga você deseja registrar um novo candidato?\n\n${vacancyToVisualize}`)
    let foundVacancy = vacancies[vacancyID - 1]

    let candidateToAdd = prompt(`Qual é o nome do candidato a ser registrado?`)

    let confirmation = confirm(`Deseja cadastrar o candidato ${candidateToAdd} para a vaga de ${foundVacancy.vacancyName}?`)

    if(confirmation){
      foundVacancy.candidateArea.candidates.push(candidateToAdd)
      foundVacancy.candidateArea.candidateQuantity += 1
    }else{
      alert(`Voltando ao menu`)
    }
  }

  function deleteVacancy(){
    let vacancyToVisualize = listAvailableVacancy()
    let vacancyID = prompt(`Qual vaga você deseja excluir?\n\n${vacancyToVisualize}`)
    let foundVacancy = vacancyID - 1

    let confirmation = confirm(`Deseja realmente excluir a vaga de ${vacancies[foundVacancy].vacancyName}?`)

    if(confirmation){
      vacancies.splice(foundVacancy, 1)
      alert(`Vaga excluida com sucesso!`)
      alert(`Voltando ao menu..`)
    }else{
      alert(`Voltando ao menu..`)
    }
    console.log(foundVacancy)
  }

}
// vacantJob()
// funcionou como deveria...
// a única coisa que não me atentei, foi de que nao precisa colocar a chave de quantidade de candidatos, é só usar candidates.lengh que terá o mesmo efeito, vou refatorar depois!


/* 
 **********teste de array*********

 let test = {
  name: "aaa",
  otherName: "asdadas",
  baba: {
    teste: ['teste1', 'teste2', 'teste3', "teste4"],
    teste2: "aaa"
  }
} 

// console.log(test.baba.teste[1])
// let list = ""
// test.baba.teste.forEach((a) => list += `${a} `)
// console.log(list) // usar essa maneira para retornar os nomes





*********teste de encontrar o índice sem usar o indexOf *******

let teste =  ['teste1', 'teste2', 'teste3', "teste4"]


// let indexTofind = teste[3 - 1]
let index = teste.length - 2
let indexTofind = teste[index]

console.log(teste.indexOf('teste3'))
console.log(indexTofind)
console.log(index)

*/