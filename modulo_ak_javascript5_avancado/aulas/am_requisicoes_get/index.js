function createCountryCard(country){
  let card = document.createElement('div')
  card.classList.add('country')

  let countryName = country.name.common
  let name = document.createElement('h2')
  name.textContent = countryName

  let flag = document.createElement('img')
  flag.src = country.flags.svg
  flag.alt = countryName

  card.append(name, flag)
  document.querySelector('#countries').append(card)
}

async function getCountries(){
  let response = await fetch('https://restcountries.com/v3.1/all')
  let countries = await response.json()
  countries.forEach(createCountryCard)
}

getCountries()