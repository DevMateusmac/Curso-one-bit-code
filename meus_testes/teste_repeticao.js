// somente para fazer os exercícios das aulas conceituais dos tópicos de JS, os exercícios estarão em pastas separadas.

//Teste que fiz sozinho de pontuação 07/09/22
// Aqui consiste em achar o ultimo elemento do array e fazer com que ele receba o ponto final ao invés de vírgula. Ou seha, quando o i tiver o tamanho do array, -1 (que é o último elemento) ele vai receber o ponto final
let arrayTeste = ["Cleitin", "Peidin", "Junin", "Astolfin", "Salgadin", "Barbaridade", "VSCode", "Umaga", "Tatical"]
let teste = ""
function betterForEach(array){
  for(let i = 0; i < array.length; i++){
    teste += array[i] + ", "
    if(i == array.length -1){
      teste += array[i] + "."
    }
    return teste
  }  
  console.log(teste)
}  
betterForEach(arrayTeste)
//final do teste acima


//teste que fiz na aula de objeto
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

//fim do teste acima

