// Closure é o esccopo criado quando um função é declarada
// Esse escopo permite a funçao acessar e manipular as variaveis externas á função

// Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())