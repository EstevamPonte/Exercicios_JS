// colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generido'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

// Objeto mais complexo
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'rua abc',
            numero: 19
        }
    },
    condutores: [{
        nome: 'julio',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av grande'
console.log(carro)

// deletando
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // da problema