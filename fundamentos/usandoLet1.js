// let so pode ser visto no seu bloco
var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)