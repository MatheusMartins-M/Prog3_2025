import produtos, {teste} from './base.js' //função auxiliar vem junto, mas precisa das chaves
//import * as muitaCoisa from './base.js'
//import prod from './base.js' Funciona por estar exportando como default
//console.log(muitaCoisa.produtos)
//muitaCoisa.teste()

console.log(produtos)

produtos.forEach(function(produto, index){
    console.log(
        produto.nome+
        " pos "+index+
        " valor "+produto.preco
    )
})

console.log("========== Nomes sem arrow function ==========")
let nomes = produtos.map(function(prod){ return prod.nome })
console.log(nomes)

console.log("========== Nomes com arrow function ==========")
let nomesComArrow = produtos.map((prod) => prod.nome)
console.log(nomesComArrow)

console.log("========== Nomes preço > 3 ==========")
let noPrecinho = produtos.filter((prod) =>(prod.preco > 3)).map((prod2)=>prod2.nome)
console.log(noPrecinho)
