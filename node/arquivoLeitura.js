// aula 131
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// oouuuu
const config = require('./arquivo.json')
console.log(config.db)

// lendo uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteudo da pasta')
    console.log(arquivos)
})

