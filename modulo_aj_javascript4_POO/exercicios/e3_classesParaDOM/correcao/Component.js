export class Component{
  #element
  constructor(tag, parent, options){
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }

  getElement(){
    return this.#element
  }

  build(){
    this.#element = document.createElement(this.tag)
    Object.assign(this.#element, this.options)
    return this
  }

  render(){
    if(this.parent instanceof Component){
      this.parent.getElement().append(this.#element) // getElement substituindo o #element
    }else{
      document.querySelector(this.parent).append(this.#element) // se o elemento n for uma instância, e aqui tiver uma string com id, ele vai encontrar esse id e vai colocar o elemento
    }
  }
}