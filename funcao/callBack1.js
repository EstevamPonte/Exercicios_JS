const fabricantes = ["mercedes", "Audi", "BMW"]

function imprimir (nome, indici){
    console.log(`${indici + 1}, ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function (a){
    console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante))