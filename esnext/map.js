// aula 148

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angula', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))

const chavesVariada = new Map([
    [function() {}, 'funcao'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariada.forEach((vl, cl) =>{
    console.log(cl, vl)
})

console.log(chavesVariada.has(123))
chavesVariada.delete(123)
console.log(chavesVariada.has(123))
console.log(chavesVariada.size)

chavesVariada.set(123, 'a')
chavesVariada.set(123, 'b')
chavesVariada.set(456, 'b')
console.log(chavesVariada)