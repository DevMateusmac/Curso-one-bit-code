let dayjs = require('dayjs')

function birthday (date){
  let birthday = dayjs(date)
  let today = dayjs()
  let ageInYears = today.diff(birthday, 'year')
  let nextBirthday = birthday.add(ageInYears + 1, 'year')
  let daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`)
}
birthday("1999-05-27")


