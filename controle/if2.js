function teste1(num){
    if(num > 7)
        console.log(num)
    
    console.log('final')// sem o bloco, o "if" so associara uma linha
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // cuidado com o ";", não usar com as estruturas de controle
    console.log(num)
    }
}

teste2(6)
teste2(8)