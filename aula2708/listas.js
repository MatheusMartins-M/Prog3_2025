let lista1 = [2, 3]
let lista2 = [5, 6]
let listasomada = lista1.concat(lista2)
let listaA = [...lista1] //É o mesmo que let lista = [lista[0], lista[1]]
let listaB = [lista1[0], lista1[1]]
let listaC = [lista1]
let listaD = lista1
let listaE = [...lista1, ...lista2]

console.log(listaA)
console.log(listaB)
console.log(listaC)
console.log(listaD)
console.log(listaE)

/*for(let i = 0; i < lista1.length; i++){
    listasomada[i] = lista1[i] + lista2[i]
}
console.log(lista[1])
console.log(typeof(lista))
console.log(lista.length)
console.log(listasomada)*/