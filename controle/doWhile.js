function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 // se começar com "-1", o codigo sera executado mesmo com o "-1"

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('ate a proxima')