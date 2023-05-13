import { Component } from "./Component.js";

export class Form extends Component{
  constructor(elementParentNode, elementAttributes){
    super('form', elementParentNode, elementAttributes)
  }

  addChildren(...children){
    children.forEach((child) => {
      this.showPrivateElement().appendChild(child.showPrivateElement())
    })
  }
}

// relembrando -> arrow function nao tem o  "this" próprio, sendo assim ele vai me retornar o this da própria instância em que a arrow function esta sendo utilizada.
//se eu tivesse usado somente uma função anonima, o this nao me retornaria nada da instância