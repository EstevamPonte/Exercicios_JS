const nome = 'rebeca'
const concatenacao = 'olá ' + nome + '!'

const template = `
Olá 
${nome}!` // a variavel faz uma interpolação com a string   
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //funsão que transforma letras minusculas em maiusculas
console.log(`Ei.. ${up('cuidado')}`)