const ferrari = {
    modelo: 'F40',
    velMAx: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObject() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObject.prototype)