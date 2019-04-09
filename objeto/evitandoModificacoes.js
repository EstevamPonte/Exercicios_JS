// Object.preventExtensions
const produto = Object.preventExtensions({ // n permite add novos atributos, somente alteralos e deletalos
    nome: 'qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escola branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 20 }
Object.seal(pessoa) // faz com que n seja permite add atributos e nem excluilos, porem pode alteralos
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constante