let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // da verdadeiro pois o "++" foi executado entes da comparaçao e o "--" depois da comparacao
console.log(num1 === num2)