import  {Component}  from "./Component.js"
import  {Input}  from "./Input.js"
import  {Label}  from "./Label.js"
import  {Form}  from "./Form.js"


let h1 = new Component('h1', 'body', {innerText: "Título gerado pela classe component!"})
let input = new Input('body', {type:'date'})
let label = new Label('body', {htmlFor: 'birthdate', innerText: 'Coloque sua data de nascimento: '})
let br = new Component('br', 'body')
let h2 = new Component('h2', 'body', {innerText: 'Segundo título gerado pelo component!'})

let form = new Form('body', {id: 'form-test'})
let formLabel = new Label('form', {htmlFor: 'input-form-text', innerText: 'label do form:'})
let formInput = new Input('form', {placeholder: 'insira o texto aqui', type: 'text'})

let formParagra = new Component('p','form', {textContent: 'parágrafo de dentro do form'})
let paragra = new Component('p','body', {textContent: 'fim do teste'})

console.log(h1)
h1.render()
h1.showPrivateElement()
h1.elementTag = 'h4'
h1.build().render() // aqui ele reconstroi o elemento e coloca ele embaixo do original, pois nao tem nenhum método para excluir o antigo

console.log(label)
label.render()

console.log(input)
input.render()

console.log(br)
br.render()


console.log(h2)
h2.render()

console.log(form)
form.render()


formLabel.render()//adicionando o label no form pelo metodo do component
form.addChildren(formInput, formParagra)// adicionando pelo método do form

paragra.render()


// funcionou como deveria, não achei bugs até aqui