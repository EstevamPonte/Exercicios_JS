// aula 128
console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

// é diferente dentro de uma função
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()