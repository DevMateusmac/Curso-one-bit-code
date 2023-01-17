function checkAge(age){
  return new Promise((resolve, reject) => {
    if(age){
      resolve(age > 18)
    }else{
      reject(new Error('age is required'))
    }
  })
}

function getAge(birthday){
  return new Promise((resolve, reject) => {
    if(birthday){
      let birthYear = new Date(birthday).getFullYear()
      let currentYear = new Date().getFullYear()
      resolve(currentYear - birthYear)
    }else{
      reject(new Error('birthday is required'))
    }
  })
}

// forma não aconselhável de encadear
getAge('1999-09-02').then(age =>{
  checkAge(age).then(isOver18 =>{
    if (isOver18){
      console.log('Maior de idade')
    }else{
      console.log('Menor de idade')
    }
  }).catch(err =>{
    console.log(err.message)
  })
}).catch(err => {
  console.log(err.message)
})


// forma mais indicada para encadear
getAge('2006-06-06').then(age => {
  return checkAge(age)
}).then(isOver18 => {
  if(isOver18){
    console.log('Maior de idade')
  }else{
    console.log('Menor de idade')
  }
}).catch(err =>{
  console.log(err.message)
})