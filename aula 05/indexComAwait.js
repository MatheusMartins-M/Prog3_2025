import { input } from "@inquirer/prompts"

const nome = await input({message: "Digite seu nome: "})    //Await aguarda a resposta do input para poder seguir para a próxima linha de código
const idade = await input({message:"Digite sua idade: "})

console.log("Olá "+nome+" você tem "+idade+" anos!")