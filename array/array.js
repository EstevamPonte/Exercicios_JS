console.log(typeof Array, typeof new Array, typeof [])
 
let aprovados = new Array ('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo' // forma usada para trocar o valor, nao add
aprovados.push('abia') // forma usada para add um valor no ultimo indici
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // coloca o array em ordem, seja em alfabetica ou numerica
console.log(aprovados)

delete aprovados[1] // o array n ordena depois que deleta
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1) // pode add ou deletar elementos, ,ais flexivel
console.log(aprovados)