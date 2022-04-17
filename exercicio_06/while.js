let nameShip = prompt('Para iniciarmos a viagem, coloque o nome da nave!')

let warpSpace =  prompt('Deseja entrar em dobra espacial?')
let warpSpaceAcount = 0

 

while(warpSpace == "sim"){
    warpSpaceAcount += 1
    warpSpace = prompt('Deseja realizar a próxima dobra espacial?')
}


if(warpSpaceAcount == 0){
    alert(`A nave ${nameShip} não realizou nenhuma dobra espacial.`)
}else if(warpSpaceAcount == 1){
 alert(`Contagem de dobras espaciais realizadas pela nave ${nameShip} é de: ${warpSpaceAcount} dobra.`)
}else {
    alert(`Contagem de dobras espaciais realizadas pela nave ${nameShip} é de: ${warpSpaceAcount} dobras.`)
}

/*
while(warpSpace == "sim") {}
    
   if(warpSpace == "sim") {
      let nextWarpSpace = prompt(`Deseja realizar a próxima dobra espacial?`)
    } else{
        alert(`Parando a contagem!`)
    }
    nextWarpSpace++
}
*/