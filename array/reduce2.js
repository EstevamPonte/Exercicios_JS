const alunos = [
    { nomw: 'Joao', nota: 7.3, bolsista: false },
    { nomw: 'maria', nota: 9.2, bolsista: true },
    { nomw: 'pedro', nota: 9.8, bolsista: false },
    { nomw: 'ana', nota: 8.7, bolsista: true }
]

// desafio 1: todos os alunos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// tem algum bolsista
const algumBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))