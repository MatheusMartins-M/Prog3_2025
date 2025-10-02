import Questao from "./Questao";

export default function Questionario(){
    return (
        <>
        <Questao 
        pergunta="A água ferve a 100ºC ao nível do mar?"
        resposta="Sim"/>

        <Questao
        pergunta="Os seres humanos têm 32 dentes permanentes?"
        resposta="Sim"/>

        <Questao
        pergunta="Um quilômetro tem 500 metros?"
        resposta="Não"/>
        </>
    )
}