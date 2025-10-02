let valorTotal = 0
function usandoLet(){
    let lista = [4,6,5,3]
    for(let index = 0; index < lista.length; index++){
        valorTotal = lista[index]+10
        let func = ()=>console.log("valor no setTime:"+ valorTotal)
        setTimeout(func, 1000)
        console.log(index)
        console.log(valorTotal)
    }
}

usandoLet();