import Tecla from "./Tecla"
import "./App.css"
import { useState } from "react"

export default function Cofre(props){
    const estadoInicial = props.senha.split("").map((valor, indice) =>
            ({
                id: indice + 1, 
                valorDigitado: 0, 
                valorCorreto: Number(valor) }))

    const [digitos, setDigitos] = useState(estadoInicial)
    const [mensagem, setMensagem] = useState("")
    const [tentativas, setTentativas] = useState(digitos.length)

    //console.log(estadoInicial)

    function atualizaDigito(valor, id){
        let novosDigitos

        novosDigitos = digitos.map((digito) => {
            if(digito.id == id){
                let novoDigito = {...digito}
                novoDigito.valorDigitado = valor
                return novoDigito
            }else{
                return digito
            }
        })

        setDigitos(novosDigitos)
    }

    function abrir(){
        let errado = digitos.find((digito) => digito.valorDigitado != digito.valorCorreto)

        if(errado){
            setMensagem("Errou")
        }else{
            setMensagem("Abriu")
        }

        setTentativas(tentativas - 1)
    }

    console.log(digitos)

    return <>
        senha informada: {props.senha}
        <br/>
        Tentativas: {tentativas}
        <br/>
        {digitos.map((digito) => 
            <Tecla
                key={digito.id}
                onChange={(valor) => atualizaDigito(valor, digito.id)}
            />
            )
        }

        <button disabled={tentativas < 1} onClick={abrir}> Abrir </button>
        <br/>
        {mensagem}
    </>
}

    /*const [senhaDigitada, setSenhadigitada] = useState(props.senha.split("").map((valor, indice) => (
            { id: indice, valor: Number(valor), digitado:0}
        )
    ))

    const [tentativas, setTentativas] = useState(senhaDigitada.length)
    const [mensagem, setMensagem] = useState("")

    console.log(senhaDigitada)

    function trocaValor (id, valor){
        const novaSenhaDigitada = senhaDigitada.map((senha) =>{
            if(id == senha.id){
                const novaSenha = {...senha, digitado: valor}
                return novaSenha
            }else{
                return senha
            }
        })

        setSenhadigitada(novaSenhaDigitada)
    }

    function validar (){
        const errados = senhaDigitada.filter(senhaDg => senhaDg.senha != senhaDg.digitado)
        if(errados.length == 0){
            setMensagem("Cofre aberto!")
        }else{
            setMensagem("Senha incorreta!")
            setTentativas(tentativas - 1)
        }
    }
    return <>
            senha informada: {props.senha}
            <br/>
            Tentativas: {tentativas}
            <br/>
            {senhaDigitada.map((teclas) => 
            <Tecla 
                key={teclas.id} 
                onChange={(valor) => trocaValor(teclas.id, valor)}
                />
            )}
            <button disabled={tentativas < 1} onClick={validar}>VALIDAR</button>
            
            <br/>
            {mensagem}
    
    </>
    */
