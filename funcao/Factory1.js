// Factory  simples
// Ela retorna um objeto, ela fabrica um objeto a partir do retorno
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())