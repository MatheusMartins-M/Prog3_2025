import CrudAPI from "./CrudAPI.js"
import teclado from 'readline-sync'

let escolha = -1

while(escolha != 0){
    mostraMenu()
    escolha = teclado.questionInt()

    switch(escolha){
        case 1: 
            const registroNome = teclado.question("Digite o nome para registro: ")
            const registroEmail = teclado.questionEMail("Digite um email: ")
            const registroGeral = {nome:registroNome, email:registroEmail}

            await CrudAPI.criar(registroGeral)
            
            break

        case 2:
            const pessoas = await CrudAPI.lerTodos()
            break

        default:
            console.log("Opção inválida!!!!")
    }

}


function mostraMenu(){
    console.log("=====================================")
    console.log("1) Criar novo registro")
    console.log("2) Listar todos os registros")
    console.log("3) Buscar registro por ID")
    console.log("4) Atualizar registro")
    console.log("5) Excluir registro")
    console.log("6) Tudo em maiúscula")
    console.log("7) Sobrenome primeiro")
    console.log("8) Pesquisar por nome")
    console.log("0) Sair")
    console.log("Escolha: ")

}

