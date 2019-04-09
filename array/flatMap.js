const escola = [{
    nome: 'turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'ana',
        nota: 9.3
    }]
},{
    nome: 'tuma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const nota1 = escola.map(getNotasDaTurma)

console.log(nota1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotasDaTurma)
console.log(nota2)