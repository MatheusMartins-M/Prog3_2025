class Pessoa{
    constructor(nome, sexo){
        this.nome = nome
        this.sexo = sexo
    }

    exibir(){
        console.log(this.nome +" - "+ this.sexo)
    }
}

let pessoa1 = new Pessoa("Matheus", "Masculino")
let pessoa2 = new Pessoa("Kamily", "Feminino")
pessoa1.exibir()
pessoa2.exibir()

