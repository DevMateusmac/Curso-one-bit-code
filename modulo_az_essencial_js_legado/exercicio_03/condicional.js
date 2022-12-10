// forma que o professor fez

let nome = prompt('Bem-vindo a bordo, piloto! \nQual é o seu nome?')

let velocidade = 0

let novaVelocidade = window.prompt('A que velocidade você gostaria de acelerar?')

let confirmarVelocidade = window.confirm(`Estamos acelerando para ${novaVelocidade}km/s.`)

if(confirmarVelocidade){
    velocidade = novaVelocidade
}

if(velocidade <= 0) {
    window.alert(`A nave está parada. Considere partir e aumentar a velocidade.`)
}else if(velocidade < 40){
    window.alert(`Você está devagar. Podemos aumentar mais a velocidade.`)
}else if(velocidade < 80){
    window.alert(`Parece uma boa velocidade para manter!`)
}else if(velocidade < 100){
    window.alert(`Velocidade alta, considere diminuir!`)
}else{
    window.alert(`Velocidade perigosa, controle automático forçado.`)
}
window.alert(`Dados da viagem. \nPiloto: ${nome}. \nVelocidade: ${velocidade}km/s. \nBoa viagem!`)






/*
essa foi a minha forma de fazer, no notion tem a forma que o professor fez + algumas anotações

let nome = window.prompt("Bem-vindo a bordo, piloto! \nQual é o seu nome?")

let velocidadeNave = 0

velocidadeNave = window.prompt(`A qual velocidade deseja pilotar a nave, ${nome}?`)

window.confirm(`Está certo de que quer pilotar a nave a ${velocidadeNave}km/s?`)

window.alert(`Velocidade da nave estabilizada a ${velocidadeNave}km/s.`)

if(velocidadeNave <= 0) {
    window.alert("A nave está parada. Considere partir e aumentar a velocidade.")
}else if(velocidadeNave < 40){
    window.alert('Você está devagar, podemos aumentar mais a velocidade!')
}else if(velocidadeNave >= 40 && velocidadeNave < 80){
    window.alert('Parece que estamos em uma boa velocidade para manter!')
}else if(velocidadeNave >= 80 && velocidadeNave < 100) {
    window.alert('Velocidade alta! Considere diminuir!')
}else {
    window.alert('Velocidade perigosa! Controle automático forçado!')
}

window.alert(`Dados da viagem: \nNome do piloto: ${nome}. \nVelocidade Atual: ${velocidadeNave}km/s. \nBoa viagem!`)
*/