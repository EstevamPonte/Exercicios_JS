//aula 146

//tagged template - processa o tamplate dentro de uma função
function tag(partes, ...valores ){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)