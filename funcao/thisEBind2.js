function Pessoa() {
    this.idade = 0
     // dispara outra função a partir do intervalo que voce passsou
     
     const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa