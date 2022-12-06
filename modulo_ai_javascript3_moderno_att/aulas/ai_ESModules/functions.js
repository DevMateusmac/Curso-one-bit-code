export let name = "Mateus"

export function label(attributes){
  let element = document.createElement('label')
  Object.assign(element, attributes)
  return element
}

export function input(attributes){
  let element = document.createElement('input')
  Object.assign(element, attributes)
  return element
}

export function br(){
  let element = document.createElement('br')
  return element
}