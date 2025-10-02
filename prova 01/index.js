import {input, select} from '@inquirer/prompts'
import CrudAPI from './CrudAPI.js'

let opcao = ''
while (opcao != 'sair'){
    opcao = await select({
    message: "Opcao",
    choices: [
        {name: 'Criar nova consulta', value: 'cadastrar'},
        {name: 'Listar todas consultas', value: 'listar'},
        {name: 'Buscar consulta por ID', value: 'buscaID'},
        {name: 'Buscar por Nome do Paciente', value: 'buscaPaciente'},
        {name: 'Buscar consulta por Especialidade', value: 'buscaNomeEspecialidade'},
        {name: 'Menores de idade', value: 'buscaMenores'},
        {name: 'Registros com problemas (Pediatria/Geriatria)', value: 'buscaProblema'},
        {name: 'sair', value: 'sair'},
    ]
    })
    
    switch(opcao){
        case 'cadastrar':
            await criarConsulta()
            break

        case 'listar':
            await listarTodos()
            break

        case 'buscaID':
            await buscaID()
            break

        case 'buscaPaciente':
            await buscaPaciente()
            break

        case 'buscaNomeEspecialidade':
            await buscaPorEspecialidade()
            break
        
        case 'buscaMenores':
            await buscaMenores()
            break

        case 'buscaProblema':
            await buscaProblemas()
            break
    }
}

async function criarConsulta() {
    let nome
    let idade
    let escolha =""
    let a = await escolhasEspecialidades()
    await a.forEach((esp) =>{
        return esp
    })
    
    while(!nome){
        nome = await input({message: "Paciente: "})
    }
    while(!idade){
        idade = await input ({message: "Idade: "})
    }
    
    while(escolha == ""){
        escolha = await select({
            message: "Especialidade: ",
            choices: a
        })
    }

    let registro = {paciente: nome, idade: idade, id_especialidade: escolha}
    let pegaIDCriacao = await CrudAPI.criar(registro)
    console.log("Cadastro realizado com sucesso, nova ID: "+ pegaIDCriacao.id)
    
}
async function listarTodos() {
    let listar = await CrudAPI.lerTodos()
    listar.forEach(pessoa => {
        console.log(pessoa.id +" - "+ pessoa.paciente +" - idade: "+ pessoa.idade +" - id_especialidade: "+ pessoa.id_especialidade)
    });
    
}

async function buscaID() {
    let id
    let i = 0

    while(!id){
        id = Number(await input ({message: "Digite o id de busca: "}))
    }

    let busca = await CrudAPI.lerPorId(id)
    if(busca && busca.id == id){
        console.log("ID: "+busca.id +"\nNome:"+ busca.paciente +"\nIdade: "+ busca.idade +"\nEspecialidade: "+ busca.id_especialidade)
        i++
    }
    if(i == 0){
        console.log("Consulta não encontrada!")
    }

}

async function buscaPorEspecialidade() {
    let escolha = ""
    let a = await escolhasEspecialidades()
    await a.forEach((esp) =>{
        return esp
    })
    while(escolha == ""){
        escolha = await select({
            message: "Especialidade: ",
            choices: a
        })
    }

    let todos = await CrudAPI.lerTodos()
    todos.forEach((pessoa) =>{
        if(pessoa.id_especialidade == escolha){
            console.log(pessoa.id +" - "+ pessoa.paciente +" - idade:"+ pessoa.idade +" - id_especialidade:"+ pessoa.id_especialidade)
        }
    })
}

async function buscaPaciente() {
    let nome

    while(!nome){
        nome = await input({message: "Digite o nome: "})
    }

    let todos = await CrudAPI.lerTodos()
    todos.forEach((pessoa)=>{
        if(pessoa.paciente.toLowerCase().startsWith(nome.toLowerCase())){
            console.log(pessoa.id +" - "+ pessoa.paciente +" - idade:"+ pessoa.idade +" - id_especialidade:"+ pessoa.id_especialidade)
        }
    })

}

async function buscaMenores() {
    let buscaPacientes = await CrudAPI.lerTodos()

    buscaPacientes.forEach((pessoa =>{
        if(pessoa.idade < 18){
            console.log(pessoa.paciente +"("+ pessoa.idade +")")
        }
    }))
}

async function buscaProblemas() {
    let buscaPacientes = await CrudAPI.lerTodos()
    //let nomeEspecialidade = await retornaNome(buscaPacientes.id_especialidade)

    await buscaPacientes.forEach((pessoa) =>{
        if(pessoa.idade > 18 && pessoa.id_especialidade == 101 || pessoa.idade < 60 && pessoa.id_especialidade == 105){
            console.log(pessoa.id +" - "+ pessoa.paciente +" - idade:"+ pessoa.idade +" - "+ pessoa.id_especialidade)
        }
    })
}
async function escolhasEspecialidades(){
    let buscaEspecialidades = await CrudAPI.listaEspecialidades()
    let obj

    obj = buscaEspecialidades.map((especialidade)=>{
        return {name: especialidade.nome, value: especialidade.id}
    })

    return obj
}

/*async function retornaNome(id_especialidade) {
    let buscaEspecialidades = await CrudAPI.listaEspecialidades()

    busca = buscaEspecialidades.map((nomeEspecialidade) =>{
        if(nomeEspecialidade.id == id_especialidade){
            return nomeEspecialidade.nome
        }
    })
}*/