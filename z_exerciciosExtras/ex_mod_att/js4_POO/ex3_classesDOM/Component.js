export class Component {
  #privateElement
  constructor(elementTag, elementParentNode, elementAttributes){
    this.elementTag = elementTag
    this.elementParentNode = elementParentNode
    this.elementAttributes = elementAttributes
    this.build()
  }

  showPrivateElement(){
    return this.#privateElement
  }

  build(){
    this.#privateElement = document.createElement(this.elementTag)
    Object.assign(this.#privateElement, this.elementAttributes)
    return this
    // return this.#privateElement -> usa-se somente o this para retornar a própria instância para que seja possível encadear mais métodos
    //no meu notion tem uma anotação sobre o return this e o return this.element
  }

  render(){
    if(this.elementParentNode instanceof Component){
      this.elementParentNode.showPrivateElement().append(this.#privateElement)
    }else{
      document.querySelector(this.elementParentNode).append(this.#privateElement)
    }
  }
}

