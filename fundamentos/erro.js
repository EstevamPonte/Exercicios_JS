// tratamento de erro
function tratarErroELancar(erro){
    // o throw ira lançar o erro
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        mdg: erro.messege,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    // o "try" é a parte em que o codigo tenta ser executado
    try{ 
        console.log(obj.name.toUpperCase() + '!!!')
    } // caso  o "try" nao de certo, o cath ira tentar tratar o erro
    catch (e){
        tratarErroELancar(e)
    } // o finally sempre sera executado independentemente
    finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)