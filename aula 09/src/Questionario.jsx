import { useState } from "react";
import Questao from "./Questao";
//import listaPerguntas from "./listaPerguntas"

export default function Questionario(props){
    //const perguntas = props.listaPerguntas
    const [acertos, setAcertos] = useState(0)
    const [erros, setErros] = useState(0)
    const [perguntas, setPerguntas] = useState(structuredClone(props.listaPerguntas))

    //let novoArray = 
        //console.log(novoArray)
    
    function respondeu(acertou, id){
        let novoAcertos = acertos
        let novoErros = erros
        let novoPerguntas = perguntas.map(pergunta => {
            if(id == pergunta.id){
                pergunta.acertou = acertou
                return pergunta
            }else{
                return pergunta
            }
        })

        setPerguntas(novoPerguntas)
        if(acertou == "acertou"){
            novoAcertos++
            setAcertos(novoAcertos)
        }else{
            novoErros++
            setErros(novoErros)
        }

        if(novoAcertos + novoErros == perguntas.length){
            props.onFinalizou(novoPerguntas)
        }
    }

    return (
        <>
        <label>Não respondidas: {perguntas.length - acertos - erros}</label> <br/>
        <label>Acertos: {acertos}</label> <br/>
        <label>Erros: {erros}</label> <br/>

        {perguntas.map((objetoPergunta)=> <Questao
                key={objetoPergunta.id}
                pergunta={objetoPergunta.pergunta} 
                resposta={objetoPergunta.resposta ? "Sim":"Não"}  // ? -> se ele for verdadeiro   : else
                onResposta={(acertou)=>respondeu(acertou, objetoPergunta.id)}
                />
            )
        }
        
        </>
    )
}