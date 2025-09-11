import {input, select} from '@inquirer/prompts'
import CrudAPI from '../RevisaoTeste/CrudAPI.js'

let opcao = ''
while (opcao != 'sair'){
    opcao = await select({
    message: "Opcao",
    choices: [
        {name: 'cadastrar', value: 'cadastrar'},
        {name: 'listar', value: 'listar'},
        {name: 'sobrenome primeiro', value:'sobrenome'},
        {name: 'sair', value: 'sair'},
    ]
    })

    switch(opcao){
        case 'listar':
            await listarTodos()
            break

        case 'cadastrar':
            await cadastrarPessoa()
            console.log("Dados cadastrados!")
            break
        
        case 'sobrenome':
            await listarTodosSobrenome()
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
        console.log(quebraNome(pessoa.nome))
    })
}

function quebraNome(nome) {
    let quebra = nome.split(" ")
    if(quebra.length <= 1){
        return nome
    }

    let sobrenome = quebra[quebra.length -1];
    let nomePrimeiro = quebra[0]
    return sobrenome+", "+nomePrimeiro
}
