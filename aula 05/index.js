import {input, select} from '@inquirer/prompts'
import CrudAPI from './CrudAPI.js'

let opcao = ''
while (opcao != 'sair'){
    opcao = await select({
    message: "Opcao",
    choices: [
        {name: 'cadastrar', value: 'cadastrar'},
        {name: 'listar', value: 'listar'},
        {name: 'buscaid', value: 'buscaid'},
        {name: 'atualizar', value: 'atualizar'},
        {name: 'excluir', value: 'excluir'},
        {name: 'maiusculas', value: 'maiusculas'},
        {name: 'sobrenome primeiro', value:'sobrenome'},
        {name: 'pesquisa nome', value: 'pesquisa'},
        {name: 'sair', value: 'sair'},
    ]
    })

    switch(opcao){

        case 'cadastrar':
            await cadastrarPessoa()
            console.log("Dados cadastrados!")
            break

        case 'listar':
            await listarTodos()
            break
        
        case 'buscaid':
            await buscarId()
            break

        case 'sobrenome':
            await listarTodosSobrenome()
            break
        
        case 'atualizar':
            await atualizarDados()
            break
        
        case 'excluir':
            await excluirDados()
            break

        case 'maiusculas':
            await maiusculas()
            break

        case 'pesquisa':
            await pesquisaNome()
            break
    }
}


async function cadastrarPessoa(){
    let nome
    let email

    while(!nome){
        nome = await input({message: "Digite seu nome: "})
    }
    while(!email){
        email = await input({message: "Digite seu email: "})
    }
    
    const pessoa = {nome:nome, email:email}
    await CrudAPI.criar(pessoa)
}

async function listarTodos(){
    let todos = await CrudAPI.lerTodos()
    todos.forEach((pessoa) =>{
        console.log(pessoa.id +" - "+ pessoa.nome +" - "+ pessoa.email)
    })
}

async function listarTodosSobrenome(){
    let todos = await CrudAPI.lerTodos()
    todos.forEach((pessoa) =>{
        console.log(quebraSobrenome(pessoa.nome))
    })
}

async function buscarId(){
    let id
    let busca

    while(!id){
        id = Number(await input({message: "Digite o id de busca: "}))
    }

    busca = await CrudAPI.lerPorId(id)
    if(busca && busca.id == id){
        console.log(busca.id +" - "+ busca.nome +" - "+ busca.email)
    }else{
        console.log("ID não encontrado")
    }
}

async function atualizarDados() {
    let id
    let busca
    let nome
    let email

    while(!id){
        id = Number(await input({message: "Digite o id para atualização: "}))
    }

    busca = await CrudAPI.lerPorId(id)

    if(busca && busca.id == id){
        while(!nome){
        nome = await input({message: "Digite o nome atualizado: "})
        }
        while(!email){
            email = await input({message: "Digite o email atualizado: "})
        }
        const pessoa = {nome: nome, email: email}
        const pessoaAtualizada = await CrudAPI.atualizar(id, pessoa)

        console.log("Dados atualizados conforme o exemplo abaixo!")
        console.log(pessoaAtualizada.id +" - "+ pessoaAtualizada.nome +" - "+ pessoaAtualizada.email)
        
    }else{
        console.log("ID não encontrado")
    }
    

}
async function excluirDados() {
    let id
    let busca

    while(!id){
        id = Number(await input({message: "Digite o ID para exclusão"}))
    }

    busca = await CrudAPI.lerPorId(id)

    if(busca && busca.id == id){
        await CrudAPI.excluir(id)
        console.log("O cadastro foi excluido com sucesso!")

    }else{
        console.log("ID não encontrado!")
    }

    let listar = await listarTodos()
    console.log(listar)
}

async function maiusculas() {
    const todos = await CrudAPI.lerTodos()
    todos.forEach((pessoa)=>{
        console.log(pessoa.id +" - "+ pessoa.nome.toUpperCase() +" - "+ pessoa.email)
    })
}

async function pesquisaNome() {
    let nome
    let buscaNomes

    while(!nome){
        nome = await input({message: "Digite o nome para buscar: "})
    }
    
    buscaNomes = await CrudAPI.lerTodos()
    buscaNomes.forEach((pessoas)=>{
        if(quebraNome(pessoas.nome).toLowerCase() == nome.toLowerCase()){
            console.log(pessoas.id +" - "+ pessoas.nome +" - "+ pessoas.email)
        }
    })
}

function quebraSobrenome(nome) {
    let quebra = nome.split(" ")
    if(quebra.length <= 1){
        return nome
    }

    let sobrenome = quebra[quebra.length -1];
    let nomePrimeiro = quebra[0]
    return sobrenome+", "+nomePrimeiro
}
function quebraNome(nome){
    let quebra = nome.split(" ")
    let primeiroNome = quebra[0]

    return primeiroNome
}
