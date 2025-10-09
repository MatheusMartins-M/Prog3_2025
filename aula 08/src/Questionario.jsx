import { useState } from "react";
import Questao from "./Questao";

export default function Questionario(){
    const [acertos, setAcertos] = useState(0)
    const [erros, setErros] = useState(0)

    function respondeu(acertou){
        if(acertou == "acertou"){
            setAcertos(acertos + 1)
        }else{
            setErros(erros + 1)
        }
    }

    return (
        <>
        <label>Não respondidas: {3 - acertos - erros}</label> <br/>
        <label>Acertos: {acertos}</label> <br/>
        <label>Erros: {erros}</label> <br/>


        <Questao 
            pergunta="A água ferve a 100ºC ao nível do mar?"
            resposta="Sim"
            onResposta={respondeu}
            />

        <Questao
            pergunta="Os seres humanos têm 32 dentes permanentes?"
            resposta="Sim"
            onResposta={respondeu}
            />

        <Questao
            pergunta="Um quilômetro tem 500 metros?"
            resposta="Não"
            onResposta={respondeu}
            />
        </>
    )
}