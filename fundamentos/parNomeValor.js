// par nome/valor
const saudacao = 'Opa' // contexto Léxico 1

function exec(){
    const saudacao = 'faaaala' // contexto lético 2
    return saudacao
}

// Objetos são grupos sninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)