// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1()  { }

// Armazenando em uma variavel
const fun2 = function () { }

// Armazenando em um Array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3)) // chamando a função que está dentro do Array passando os paramentros

// Armazenando em uma atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}
run(function () { console.log('Executando...')}) // passando as funçõe

// Um função pode retornar/conter um função
function soma(a, b) {
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4) // Chamndo a função