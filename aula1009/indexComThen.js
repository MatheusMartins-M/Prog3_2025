//npm install @inquirer/prompts

import { input } from '@inquirer/prompts'

//Jeito dificil/não recomendado

const perguntar = input({message: "Digite seu nome: "}) //está guardando uma promessa de que vai fazer algo no futuro
function retornarQuandoResponder(oQueFoiRespondido){
    const perguntar2 = input({message: "Idade"})
    function retornarQuandoResponderIdade(IdadeRespondida){
        console.log("Olá, "+oQueFoiRespondido+"! Você tem "+IdadeRespondida+" anos")
    }
    perguntar2.then(retornarQuandoResponderIdade)
}
perguntar.then(retornarQuandoResponder) //.then quando tu resolver responder, executa o código
console.log("Passou reto!")