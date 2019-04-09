// implementando o FOREACH

const meuarray = ['agata', 'aldo', 'daniel', 'raquel']

for(let i = 0; i < meuarray.length; i++){
    console.log(`${i + 1}) ${meuarray[i]}`)
}


// OUUUU

Array.prototype.forEach2 = function (callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['agata', 'aldo', 'daniel', 'raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome} `)
})