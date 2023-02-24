// fila de espera
function doct(){
let patients = ["Bruno", "Talita", "Benicio", "Tales", "Marcos", "Adriana", "Mauricio"]
let i = 0
let list = ""
let option 

do{
 // refazer essa iteração com base no índice do próprio forEach (parâmetro) no lugar do i 
 // e ficou assim
 /**
  let list = ''
  patients.forEach((patient, i) => {
    list +=`${i + 1} - ${patient}\n`
  })

  com isso nao precisa mais a variável i, e o list pode ser declarado dentro da estrutura de repetição
  */
  patients.forEach(patient => {
    i++
    list +=`${i} - ${patient}\n`
  })

  option = prompt(`Consultório médico\nPacientes na fila de espera:\n\n${list}\n\nO que deseja fazer?\n1 - Adicionar novo paciente\n2 - Consultar paciente\n3 - Encerrar e sair`)
  list = ''
  i = 0

  switch(option){
    case "1":
      let newPatient = prompt(`Qual é o nome do novo paciente?`)
      patients.push(newPatient)
      break
    case "2":
      let next = patients.slice(0, 1)
      alert(`O próximo paciente da fila é ${next}`)
      break
    case "3":
      alert(`Encerrando sistema...`)
      break
    default:
      alert("Algo deu errado, tente novamente!")
  }
}while(option !== "3")
}
// doct()
//funcionou corretamente, porém acredito que dava para ter feito de uma forma melhor, sem ter que zerar o contador e limpar a lista para ele refazer a contagem no foreach



// pilha de cartas

function card(){
  let pack = ["2 de copas", "3 de paus", "Ás de espadas", "Rei de ouros", "Valete de espadas", "Dama de ouros"]
  let option
  do{
    let showCard = ""
    for(let i = 0; i < pack.length; i++){
      showCard += `- ${pack[i]}\n`
    }

    option = prompt(`Baralho virtual:\n\nCartas na pilha\n${showCard}\nO que deseja fazer?\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair`)

    switch(option){
      case "1":
        let cardToAdd = prompt(`Qual é a carta que você deseja inserir no baralho?`)
        pack.push(cardToAdd)
        break
      case "2":
        let cardToPull = pack.shift()
        alert(`A carta puxada foi: ${cardToPull}`)
        break
      case "3":
        alert(`Encerrando e saindo...`)
        break
      default:
        alert("Algo deu errado, tente novamente!")
    }
  }while(option !== "3")
}

// card()
// funcionou corretamente também
