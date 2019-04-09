const pilotos = ['vettel', 'alonso', 'raikkinen', 'massa']
pilotos.pop() // retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen') // add um elemento no final do array
console.log(pilotos)

pilotos.shift() // retira o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('hamilton') // adiciona um elemento no começo
console.log(pilotos)

// splice pode adicionar e remover um elemento

// adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array // pega um pedaço do array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // pega elementos entre o indici [1] e [4]
console.log(algunsPilotos2)