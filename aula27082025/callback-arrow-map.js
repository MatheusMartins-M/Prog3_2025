function soma2(valor){
    return valor + 2
}
function soma3(valor){
    return valor + 3
}

let lista = [2, 3, 4]

function somaLista(lista){
    let lista2 = []
    for(let i = 0; i < lista.length; i++){
        lista2.push(soma2(lista[i]))
    }
    return lista2
}

function somaListaFuncaoParametro(lista, funcao){
    let lista2 = []

    for(let i = 0; i < lista.length; i++){
        lista2.push(funcao(lista[i]))       //push: adicionar elemento na lista
    }

    return lista2
}

console.log(lista)
console.log(somaLista(lista))
console.log(somaListaFuncaoParametro(lista, soma3))

function concatenaComCasa(valor){
    return "Casa: "+ valor
}
console.log(concatenaComCasa(2))
console.log(somaListaFuncaoParametro(lista, concatenaComCasa))
console.log(somaListaFuncaoParametro(lista, function(valor){
    return valor + 50
}))
console.log(somaListaFuncaoParametro(lista, (valor)=>valor+20)) //quando retorna uma unica expressao, não precisa de return

console.log("=========== Parte nova ==========")
let novalista = lista.map(soma2)
console.log(novalista)

console.log(["Maria","João","Pedro"].map(
    function(valor){
        let objeto = {nome: valor}
        return objeto
    }
))