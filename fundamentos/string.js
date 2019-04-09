const escola = "Cod3r"

console.log(escola.charAt(4)) //mostra o 4 indice
console.log(escola.charAt(5)) //mostra nada
console.log(escola.charCodeAt(3)) 
console.log(escola.indexOf('3')) //mostra somente o indice indicado

console.log(escola.substring(1)) //tira o primeiro indice
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //faz a concatenação
console.log(escola.replace(3, 'e')) //troca o indice

console.log('Ana,Maria,Pedro'.split(',')) //quebra uma string em array