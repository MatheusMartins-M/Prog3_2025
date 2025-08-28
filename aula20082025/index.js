import teclado from 'readline-sync'

/*let d
if(d){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

let valor = "a" || "b" //Primeira elemento verdadeiro que ele acha, ele retorna
console.log(valor)

valor = "a" && "w" //Último elemento verdadeiro que ele acha, ele retorna
console.log(valor)

valor = 0 && "b" //Quando falha, retorna o último avaliado
console.log(valor)

console.log(2 == '2') //Compara os valores
console.log(2 === '2') //Compara os tipos

let b = '1.8'
let c = 1
console.log(typeof(b))
b = Number(b)
console.log(typeof(b))*/

function lerNumero(textoPergunta){
    let valor
    let numeroValido = true

    while (numeroValido){
        valor = teclado.question(textoPergunta)

        if (valor != '' && !isNaN(valor)){
            numeroValido = true
            return Number(valor)
        }else{
            console.error("Valor invalido!")
        }
    }
}



/*let valorA = lerNumero("Digite o valor de A: ")
let valorB = lerNumero("Digite o valor de B: ")
let valorC = valorA + valorB

console.log("Total: "+ valorC)*/

let tamanho = lerNumero("Digite o tamanho: ")
let quantidade = 1;
let soma = 0

while (quantidade <= tamanho){
    let valor = lerNumero("Digite o valor "+quantidade+": ")
    soma += valor
    quantidade++
}

console.log("Total: "+ soma)