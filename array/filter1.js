const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'como de plastido', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p) {
    return false 
}))


const a = function (quebra){
    if(quebra.fragil = true){
        return true
    } else {
        return false
    }
}
//OUUU
// const caro = produto => produto.preco >= 500

const b = function (caro){
    if(caro.preco > 1000){
        return true
    } else {
        return false
    }
}
//OUUU
// const fragil = produto => produto.fragil

const resultado = produtos.filter(a).filter(b)
console.log(resultado)