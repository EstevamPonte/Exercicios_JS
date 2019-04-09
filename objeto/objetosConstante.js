// o valor o objeto pode ser alterado pois esta pegamdo o endereço de memoria
const pessoa = { nome: 'joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// aqui estamos tantando mudar o endereco de memoria de pessoa, por isso que da erro
pessoa = {nome: 'ana'}

// o "Object.freeze" n permite que o objeto seja mudado
Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstate = Object.freeze({ nome: 'joao'})
console.log(pessoa.nome)