let dayjs = require('dayjs')

// let now = dayjs()  usando essa variável aqui eu consegui ver alguns metodos que ele deixou disponível, enquando que colocando direto no console log ele não mostrou, forma que eu usei e mostrou -> console.log(now.) 
//console.log(now.$d) -> aqui mostrou a data segundo as chaves que aparecem

//01 23 4567
//27 05 1999
function birthdayCalculate(name, date){
let userName = name
let convertDate = date[4] + date[5] + date[6] + date[7] + date[2] + date[3] + date[0] + date[1]
let age = dayjs(convertDate)
let bornDate = age.format('DD/MM/YYYY')

let date1 = dayjs("1999-05-27")
let date2 = dayjs("2022-11-18")
let currentAge = date2.diff(date1, 'y')

let nextBirthday = date1.add(24, 'y').format('DD/MM/YYYY')
let nextAge = date2.add(1, 'y').diff(date1,'y')


let dayCounting = dayjs('2023-05-27').diff(date2, 'd')

console.log(`O ${userName} nasceu em ${bornDate} e tem ${currentAge} anos, e ano que vem no dia ${nextBirthday} fará ${nextAge} anos, até lá faltam ${dayCounting} dias para o aniversário.`)
}
birthdayCalculate("Mateus","27051999") 
// aqui tomei a liberdade de converter a data para o portugues, o exercício não pedia isso, mas fiz.