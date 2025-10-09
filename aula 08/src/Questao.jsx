import React, { useState } from "react"

export default function Questao(props){
    const [resultado, setResultado] = useState("")
    const [tentativas, setTentativas] = useState(0)

    function verifica(resposta){
        
        if(props.resposta == resposta){
            //alert("Acertou")
            setResultado("Acertou")
            setTentativas(tentativas + 1)
            props.onResposta("acertou")
        }else{
            //alert("Erroooooou")
            setResultado("Errrroooooooou")
            setTentativas(tentativas + 1)
            props.onResposta("errou")
        }

    }
    /*function clicarSim(){
        verifica("Sim")
    }
    function clicarNao(){
       verifica("Não")
    }

    const clicarSim = () => verifica("Sim")
    const clicarNao = () => verifica("Não")
    */

    return (
        <div>
            <h2>Pergunta: {props.pergunta}</h2>
            {resultado != "" ?
                <label>Resultado: {resultado}</label>: 
                <>
                    <button onClick={() => verifica("Sim")}>Sim</button>
                    <button onClick={() => verifica("Não")}>Não</button> 
                </>
            }
            
        </div> 
    )
}