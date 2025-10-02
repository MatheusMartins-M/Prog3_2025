let obj = {nome:"Matheus", "sexo":"Masculino", "data de nascimento": "12/12/12"}
let obj2 = {...obj}

obj.nome = "Mudou nome"

console.log(obj)
console.log(obj2)

function exibir (objeto){
    console.log(objeto.nome+" - "+ objeto.sexo)
}
exibir(obj)

let exibirNovo = exibir         //referenciar a função
exibirNovo(obj)
console.log(exibirNovo)

let exibirReverso = function(objeto){               //função anonima
    console.log(objeto.sexo+" - "+ objeto.nome)
}
exibirReverso(obj)

obj.exibir = function(){
    console.log(this.nome+" - "+ this.sexo)
}

obj.exibir()