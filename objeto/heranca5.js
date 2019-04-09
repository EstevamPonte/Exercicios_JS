console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () { // o reverse ira reverter as posições da string
    return this.split('').reverse().join('') // o split ira quebrar essa string em arrays e o join ira juntalas novamente
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())

String.prototype.toString = function () { // causa efeito colateral subistuir comportamentos que ja existe
    return 'lascou tudo'
}

console.log('Escola cod3r'.reverse())