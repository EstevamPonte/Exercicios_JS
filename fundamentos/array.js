const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')// adiciona valores ao array
console.log(valores)

console.log(valores.pop())// retira o ultimo valor do array
delete valores[0]// deleta o valor de acordo com o indice selecionado
console.log(valores)

console.log(typeof valores)// mostra o tipo do valor