//aula 122
// metodo require importa os arquivos
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') // esta pasta esta no node_module, por isso que acha sem um caminho
console.log(saudacao.ola)

const c = require('./pastaC') // quando um arquivo estiver com o nome "index", n preciso identificar o arquivo
console.log(c.ola2)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)