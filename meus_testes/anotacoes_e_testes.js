// somente para fazer os exercícios das aulas conceituais dos tópicos de JS, os exercícios estarão em pastas separadas.

//Teste que fiz sozinho de pontuação 07/09/22
{
// Aqui consiste em achar o ultimo elemento do array e fazer com que ele receba o ponto final ao invés de vírgula. Ou seha, quando o i tiver o tamanho do array, -1 (que é o último elemento) ele vai receber o ponto final
let arrayTeste = ["Cleitin", "Peidin", "Junin", "Astolfin", "Salgadin", "Barbaridade", "VSCode", "Umaga", "Tatical"]
let teste = ""
function betterForEach(array){
  for(let i = 0; i < array.length; i++){
    if(i == array.length -1){
      teste += array[i] + "."
    }else{
      teste += array[i] + ", "      
    }
  }    
  console.log(teste)
}
betterForEach(arrayTeste)
}
//final do teste acima


//teste que fiz na aula de objeto
{
/*
nessse caso abaixo, na estrutura do..while, é o mesmo caso que anotei sobre o for:
eu estava declarando a variável showhouses fora da estrutura do..while, sendo assim, toda hora que eu adicionava um imovel, ele copiava tudo e criava o segundo array embaixo com o novo elemento, todo amontoado, sendo assim toda vez que a estrutura for iniciar novamente, ela vai "redeclarar" a variável  fazendo com que fique uma vez só e não uma sendo criada debaido da outra
abaixo segue o exercício
*/
let imoveis = [
  {
    nome: "casa1",
    proprietario: "Jonas",
    quartos: 3,
    banheiros: 2,
    garagem: "sim"
  }, 
  {
    nome: "casa2",
    proprietario: "John",
    quartos: 4,
    banheiros: 3,
    garagem: "sim"  
  },
  {
    nome: "casa3",
    proprietario: "Tracy",
    quartos: 2,
    banheiros: 1,
    garagem: "não"  
  }, 
  {
    nome: "casa4",
    proprietario: "Dany",
    quartos: 5,
    banheiros: 3,
    garagem: "sim"  
  }, 
  {
    nome: "casa5",
    proprietario: "Rob",
    quartos: 3,
    banheiros: 2,
    garagem: "não"  
  }, 
  {
    nome: "casa6",
    proprietario: "Trevor",
    quartos: 2,
    banheiros: 1,
    garagem: "sim"  
  }
]
let option

do{
  let showhouses = ""
  for(let i = 0; i < imoveis.length; i++){
    showhouses += (i + 1) + "º " + imoveis[i].nome + "\n"
  }
  option = prompt("Imóveis cadastrados:\n" + showhouses + "\n\nO que deseja fazer agora?\n\n1 - Salvar um imóvel\n2 - Mostrar imóveis cadastrados\n3 - Sair")
  switch(option){
    case "1":
      alert("Registro de casa, preencha os campos a seguir:")
      let nameHouse = prompt("Qual o nome da casa?")
      let houseOwner = prompt("Quem é o dono da casa?")
      let bedroomNumber = prompt("A casa tem quantos quartos?")
      let bathRoomsNumber = prompt("Quantos banheiros tem na casa?")
      let garage = prompt("A casa tem garagem?")

      let newHome = {
        nome: nameHouse,
        proprietario: houseOwner,
        quartos: bedroomNumber,
        banheiros: bathRoomsNumber,
        garagem: garage
      }
      imoveis.push(newHome)
      break
    case "2":
      alert("Imóveis cadastrados")
      for(let i = 0; i < imoveis.length; i++){
        let showHouses2 = ""
        showHouses2 += "Casa" + (i + 1) + ":" + "\nNome: " + imoveis[i].nome + "\nProprierário: " + imoveis[i].proprietario + "\nQuartos: " + imoveis[i].quartos + "\nBanheiros: " + imoveis[i].banheiros + "\nPossui garagem: " + imoveis[i].garagem
        alert(showHouses2)
      }      
      break
    case "3":
      alert("Encerrando app...")
      break
    default:
      alert("Algo deu errado, tente novamente")
  }
}while(option != "3")
}
//fim do teste acima


//função recursiva
{
/*com exelplo de fatorial, esse tipo de função precisa de muito cuidado, pois ela pode ter uma execução sem parar, até dar o limite de execução (pilha, conceito apresentado em estrutura de dados, ele vai amontoando uma função em cima da outra) e dar erro.
*/
function fatorial(num){
  console.log(num)
  if(num == 0){
    return 1
  }else if(num == 1){
    return 1
  }else{
    console.log(`${num} * !${num - 1}`)
    return num * fatorial(num - 1)
  }
  
}
console.log(fatorial(5))
}
// fim do teste acima



// funções  anonimas
{
 /*as funções anônimas são funções sem nome e que precisam ser atribuidas a uma constante ou variável, a funcionalidade delas é semelhante às variáveis let e var, uma função normal pode ser chamada no código antes mesmo de ser declarada, pois quando é lida, a função é jogada para o topo do código, já a função anônima só pode ser chamada após a declaração, se não da erro no código */

// função normal
funcao1()

function funcao1(){
  console.log("Olá, mundo")
}

//função anônima
let funcao2 = function(){
  console.log("Olá, mundão")
}
funcao2()
}
// fim do teste acima


// teste com high order functions
{
  // high order function
   function calcular(a, b, operacao){
    console.log("Realizando uma operação")
    let result = operacao(a, b)
    return result
   }
  
   function somar(x, y){
    console.log("Realizando uma soma")
    return x + y
   }
  
   console.log(calcular(3, 5, somar))
  
   console.log(calcular(5, 3, function(x, y){
    console.log("Realizando uma subtração")
    return x - y
   }))
  
  /// high order function (essa se assemelha ao foreach com a mesma finalidade e funcionalidade)
  function exibirElemento(elemento, indice, array){
    console.log({
      elemento,
      indice,
      array
    })
  }
  
  let lista = ["Maçã", "Banana", "Laranja", "Limão"]
  
  for(let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
  }
  
  // exemplo do uso da função
  lista.forEach(exibirElemento)
  
  //uso do foreach do cotidiano
  lista.forEach(function(elemento, indice, array){
    console.log({
      elemento,
      indice,
      array
    })
  })
  
  /* 
  no caso acima como é criado o objeto dentro do console:
  
  declarar o objeto assim:
  
  lista.forEach(function(elemento, indice, array){
    console.log({
      elemento,
      indice,
      array
    })
  })
  
  é o mesmo que declarar o objeto assim:
  lista.forEach(function(elemento, indice, array){
    console.log({
        elemento: elemento,
        indice: indice,
        array: array
      })  
  })
  */
  }
// fim do teste acima 

// teste com high order function nativa do js pt1
{
  let personagens = [
    {nivel: 42, nome:"Thrall", raca: "orc", classe: "Xamã"},
    {nivel: 28, nome:"Garrosh", raca: "orc", classe: "Guerreiro"},
    {nivel: 35, nome:"Varok", raca: "orc", classe: "Guerreiro"},
    {nivel: 35, nome:"Uther", raca: "Humano", classe: "Paladinho"},
    {nivel: 26, nome:"Jaina", raca: "Humano", classe: "Maga"},
    {nivel: 39, nome:"Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa"},
    {nivel: 29, nome:"Muradin", raca: "Anão", classe: "Guerreiro"}
  ]
  
  //map
  //map de uma forma feita sem a função padrão
  const nomes1 = []
  
  for(let i = 0; i < personagens.length; i++){
    nomes.push(personagens[i].nome)
  }
  console.log(nomes1)
  
  //map com a função padrão do js
  let nomes = []
  
  personagens.map(function(personagem){
    return personagem.nome /* ou => nomes.push(personagens.nome)*/
  })
  console.log(nomes)
  
  
  // filter
  
  // filter sem usar a função padrão do js
  let orcs1 = []
  for(let i = 0; i < personagens.length; i++){
    if(personagens[i].raca == "orc"){
    orcs.push(personagens[i].nome)
    }
  }
  console.log(orcs1)
  
  //filter usando a função do js
  let orcs = personagens.filter(function(personagem){
    return personagem.raca==="orc"
  })
  console.log(orcs)
  
  
  // reduce
  
  let nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
  }, 0)
  console.log(nivelTotal)
  
  let racas = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){
      valorAcumulado[personagem.raca].push(personagem)
    }else{
      valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
  }, {})
  console.log(racas)
  }
// fim do teste acima


// teste com high order function nativa do js pt2
{
  let personagens = [
    {nivel: 42, nome:"Thrall", raca: "orc", classe: "Xamã"},
    {nivel: 28, nome:"Garrosh", raca: "orc", classe: "Guerreiro"},
    {nivel: 35, nome:"Varok", raca: "orc", classe: "Guerreiro"},
    {nivel: 35, nome:"Uther", raca: "Humano", classe: "Paladinho"},
    {nivel: 26, nome:"Jaina", raca: "Humano", classe: "Maga"},
    {nivel: 39, nome:"Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa"},
    {nivel: 29, nome:"Muradin", raca: "Anão", classe: "Guerreiro"}
  ]

//sort
// é um meto de ordenar um array no JavaScript
personagens.sort(function(a, b){
  return a.nivel - b.nivel /*Aqui se eu colocar a primeiro, ele vai colocar em ordem crescente, se colocar b, sera em ordem decrescente.*/
})
console.log(personagens)

/*uma dica: o sort sempre altera o array original, sendo assim, uma maneira de fazer com que seja criado um novo array com as alterações, pode-se usar o slice, que criará uma cópia*/

let personagensOrdenados = personagens.slice().sort(function(a, b){
  return a.nivel - b.nivel
})
console.log(personagensOrdenados)
}
// fim do teste acima


//teste com data em js que eu fiz
{
  var dataInput = '2020-02-06';

  data = new Date(dataInput);
  dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  //o resultado será: 06/02/2020
  // no meu caso eu fiz no exercício que está abaixo desse teste 
}


//Teste: exercício de objeto do curso, com o módulo atualizado de JS
//exercício final do modulo novo de JS1 do curso OneBitCode
{
  // essa versão abaixo é a correção do exercício, 
  {

    let vagas = []

    function listarVagas(){
      let vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        // 1. nome, quantidade de candidatos
        textoFinal += indice = "."
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + "candidatos)\n"
        return textoFinal
      })
      alert(vagasEmTexto)
    }

    function novaVaga(){
      let nome = prompt("Informe um nome para a vaga:")
      let descricao = prompt("Informe uma descrição para a vaga:")
      let dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga")

      let confirmacao = confim(
        "Deseja criar uma nova vaga com essas informações? \n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\n Data limite: " + dataLimite
      )

      if(confirmacao){
        let novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada!")
      }
    }

    function exibirVaga(){
      let indice = prompt("Informe o índice da vaga que deseja exibir:")

      if(indice >= vagas.length || indice <= 0){
        alert("Índice inválido!")
        return // essa é uma forma de fazer com que não seja necessário colocar o else ali em baixo, se a condição for verdadeira, ele apenas vai voltar para o menu, isso deixa o código mais limpo.
      }
      let vaga = vagas[indice]

      let candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
      }, "")

      alert(
        "Vaga nº " + indice +
        "Nome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\n Data Limite" + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\n Candidatos inscritos: " + candidatosEmTexto
      )
    }

    function inscreverCandidato(){
      let candidato = prompt("Informe o nome do(a) candidato(a):")
      let indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever")
      let vaga = vagas[indice]

      let confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "? \n" +
        "Nome: " + vaga.nome + "Descrição: " + vaga.descricao + "Data limite: " + vaga.dataLimite
      )

      if (confirmacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada!")
      }
    }

    function excluirVaga(){
      let indice = prompt("Informe o índice da vaga que deseja excluir:")
      let vaga = vagas[indice]

      let confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "? \n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
      )

      if (confirmacao) {
        vagas.splice(indice, i)
        alert("Vaga excluída!")
      }
    }

    function exibirMenu(){
      let opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair"
      )
      return opcao
    }

    function executar(){
      let opcao = ""

      do{
        opcao = exibirMenu()

        switch(opcao){
          case "1":
            listarVagas()
            break
          case "2":
            novaVaga()
            break
          case "3":
            exibirVaga()
            break
          case "4":
            inscreverCandidato()
            break
          case "5":
            excluirVaga()
            break
          case "6":
            alert("Saindo....")
            break
          default:
            alert("Opção inválida")
        }
      }while(opcao != "6")
    }

  }

  // A versão abaixo foi a que eu fiz, ficou certinho, funcionando de acordo com o que foi pedido no exercicio, a versão acima é o código da correção do professor, que deixei para fins de estudo e consulta, caso tenha alguma informação que eu ainda nao saiba. Esse exercício é referente ao módulo atualizado de javascript essencial do cruso.
  {
  let availableVacancies = [
  {
    vacancyName: "Analista de dados",
    description: "Desenvolver e implementar análises de dados, sistemas de coleta de dados e outras estratégias que otimizem a eficiência e a qualidade estatística.",
    limitDate: new Date('2022-09-25').toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
    numberOfCandidates: 4,
    candidates: [
      ["Mario"],
      ["Marcio"],
      ["Maria"],
      ["Marta"]
    ]
  },
  {
    vacancyName: "Desenvolvedor front-end",
    description: "Front-end está muito relacionado com a interface gráfica do projeto. Ou seja, é onde se desenvolve a aplicação com a qual o usuário irá interagir diretamente, seja em softwares, sites, aplicativos, etc",
    limitDate: new Date('2022-11-22').toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
    numberOfCandidates: 3,
    candidates: [
      ["Luis"],
      ["Marcio"],
      ["Sara"]
    ]
  }, // FAZER UM TESTE COLOCANDO TODOS OS NOMES DOS CANDIDATOS DENTRO DE ARRAY AO INVES DE OBJETO, ATT testei e deu certo :D
  {
    vacancyName: "Desenvolvedor back-end",
    description: "Back-end se relaciona com o que está por trás das aplicações desenvolvidas na programação. Ou seja, tudo que dá estrutura e apoio às ações do usuário da máquina é chamado de back-end.",
    limitDate: new Date('2022-12-15').toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
    numberOfCandidates: 5,
    candidates: [
      ["Mario"],
      ["Augusto"],
      ["Maria"],
      ["Marta"],
      ["Ellen"]
    ]
  },
  {
    vacancyName: "Design gráfico",
    description: "O designer gráfico é responsável por criar a parte visual de materiais como sites, panfletos, outdoors, banners, embalagens, anúncios, campanhas e logotipos",
    limitDate: new Date('2022-10-05').toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
    numberOfCandidates: 6,
    candidates: [
      ["Mario"],
      ["Marcio"],
      ["Maria"],
      ["Mauricio"],
      ["Magda"],
      ["Margarete"]
    ]
  },
  
  ]


function showMenu(){
  let option = prompt("Sistema de empregos\n\nO que deseja fazer?\n\n1 - Listar vagas disponíveis \n2 - Criar uma nova vaga \n3 - Visualizar uma vaga \n4 - Inscrever um candidato em uma vaga \n5 - Excluir uma vaga \n6 - Sair\n\nSelecione uma das opções com os respectivos números!")
  return option
} 


function listOfVacancies (list){ // mostrar o indice, nome e quantidade de candidatos, de todas as vagas
  let vacanciesList = "Lista de vagas disponíveis: \n\n"
  for(let i = 0; i < list.length; i++){
    vacanciesList += "Vaga " + (i + 1) + ": " + list[i].vacancyName + "\nNúmero de candidatos: " + list[i].numberOfCandidates + "\n\n"
  }
  alert(vacanciesList)
}

function newVacancy (){
  let newVacancyData = 
  {
    vacancyName: prompt("Qual é o nome da vaga disponível?"),
    description: prompt("Qual é a descrição que resume a função do profissional nesta vaga?"),
    limitDate: new Date(prompt("Qual é a data para entrevista dos candidatos?")).toLocaleDateString('pt-BR', {timeZone: 'UTC'}),
    numberOfCandidates: 0
  }

  let confirmData = confirm("Deseja salvar esses dados e criar a vaga?")
  if(confirmData == true){
    availableVacancies.push(newVacancyData)
  }
}

function visualizeVacancy(list){ // aqui vou usar slice
  let visualizeVacancies = "Qual das vagas disponíveis você deseja visualizar?\n\n"
  for(let i = 0; i < list.length; i++){
    visualizeVacancies += "Vaga " + (i + 1) + ": " + list[i].vacancyName + "\n\n"
  }
  
  let confirmVacancy = prompt(visualizeVacancies + "Coloque o número correspondente da vaga!")
  let vacancyIndex = (confirmVacancy - 1)
  let showCandidates = ""

  if(list[vacancyIndex].candidates !== undefined){
  for(let i = 0; i < list[vacancyIndex].candidates.length;i++){    
    if(i == list[vacancyIndex].candidates.length -1){
      showCandidates += list[vacancyIndex].candidates[i] + "."
    }else{
      showCandidates += list[vacancyIndex].candidates[i] + ", "  
    }
  }
  let vacancyToVisualize = "Vaga " + (vacancyIndex + 1) + ": " + availableVacancies[vacancyIndex].vacancyName + "\n\nDescrição da vaga: "  + availableVacancies[vacancyIndex].description + "\n\nData para entrevista: " + availableVacancies[vacancyIndex].limitDate + "\n\nNúmero de candidatos: " + availableVacancies[vacancyIndex].numberOfCandidates + "\n\nCandidatos à vaga: " + showCandidates
  
  alert(vacancyToVisualize)   
}else{
  let vacancyToVisualize = "Vaga " + (vacancyIndex + 1) + ": " + availableVacancies[vacancyIndex].vacancyName + "\n\nDescrição da vaga: "  + availableVacancies[vacancyIndex].description + "\n\nData para entrevista: " + availableVacancies[vacancyIndex].limitDate
  
  alert(vacancyToVisualize)
}

}

function registerCandidate(list){
  let visualizeVacancies = "Em qual vaga você deseja cadastrar um candidato?\n\n"

  for(let i = 0; i < list.length; i++){
    visualizeVacancies += "Vaga " + (i + 1) + ": " + list[i].vacancyName + "\n\n"
  }
  let chooseVacancy = prompt(visualizeVacancies + "Coloque o número correspondente da vaga!")
  let vacancyIndex = (chooseVacancy - 1)
  let newCandidateName = prompt("Qual o nome do novo candidato?")
  let confirmCandidate = confirm("Deseja salvar informações e finalizar o cadastro?" + "\n\nInformações de cadastro: " + "\n\nCandidato: " + newCandidateName + "\nVaga desejada: " + list[vacancyIndex].vacancyName )

  if(confirmCandidate == true){
    list[vacancyIndex].numberOfCandidates+=1
    list[vacancyIndex].candidates = [newCandidateName]
    
  }  
}

function deleteVacancy(list){
  let visualizeVacancies = "Em qual vaga você deseja cadastrar um candidato?\n\n"
  for(let i = 0; i < list.length; i++){
    visualizeVacancies += "Vaga " + (i + 1) + ": " + list[i].vacancyName + "\n\n"
  }
  let chooseVacancy = prompt(visualizeVacancies + "Coloque o número correspondente da vaga!")
  let vacancyIndex = (chooseVacancy - 1)
  let confirmDelete = confirm("Deseja realmente excluir esta vaga?")
  console.log(vacancyIndex)
  if(confirmDelete == true){
    list.splice(vacancyIndex, 1)
  }
}

let chosenOption
do{
   chosenOption = showMenu()

  switch(chosenOption){
    case "1":
      listOfVacancies(availableVacancies)
      break
    case "2":
      newVacancy()
      break
    case "3":
      visualizeVacancy(availableVacancies)
      break
    case "4":
      registerCandidate(availableVacancies)
      break
    case "5":
      deleteVacancy(availableVacancies)
      break
    case "6":
      alert("Encerrando aplicativo")
      break
    default:
      alert("Algo deu errado, tente novamente!")
  }
  
}while(chosenOption != "6")

//Aqui foi finalizado o exercício, só falta corrigir e gg
// quando der branco, sobre adicionar novo elemento no objeto, basta procurar "como adicionar uma nova chave no objeto em JS"
  }
}
//fim do teste acima