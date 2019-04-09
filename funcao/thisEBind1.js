const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // sem o "this" nao funciona
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigma: function e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // amarra um determinado tipo
falarDePessoa()
