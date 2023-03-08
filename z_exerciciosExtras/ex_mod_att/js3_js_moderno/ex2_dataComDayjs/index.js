const dayjs = require('dayjs')


let birthDate = (username, date) => {
  let manipulatedbirthday = dayjs(date[4] + date[5] + date[6] + date[7] + date[2] + date[3] + date[0] + date[1])
  let currentDate = dayjs()
  let currentAge = currentDate.diff(manipulatedbirthday, 'year')
  let nextBirthday = manipulatedbirthday.add(currentAge + 1, 'year')
  let dayscount = nextBirthday.diff(currentDate, 'day')
  
  console.log(`${username} nasceu em ${manipulatedbirthday.format('DD/MM/YYYY')} e tem ${currentAge} anos, seu próximo aniversário será ${nextBirthday.format('DD/MM/YYYY')} e faltam ${dayscount + 1} dias.`)
}

birthDate('Mateus', '27051999')