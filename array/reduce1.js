const alunos = [
    { nomw: 'Joao', nota: 7.3, bolsista: false },
    { nomw: 'maria', nota: 9.2, bolsista: true },
    { nomw: 'pedro', nota: 9.8, bolsista: false },
    { nomw: 'ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)