export default function Questao(props){
    function verifica(resposta){
        if(props.resposta == resposta){
            alert("Acertou")
        }else{
            alert("Erroooooou")
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
            <button onClick={() => verifica("Sim")}>Sim</button>
            <button onClick={() => verifica("Não")}>Não</button>
        </div> 
    )
}