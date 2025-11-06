import { useState } from "react";
import ItemAvaliado from "./ItemAvaliado";


export default function PesquisaSatisfacao (props){
    const [itensIniciais, setItensIniciais] = useState(props.itens.map((nome, id)=> ({
        id: id,
        nome: nome,
        valor: 0,
        respondido: false
    })))

    const [respondido, setRespondido] = useState(0)
    const [jogoFinalizado, setJogoFinalizado] = useState(false)

    function respondeu(respondeu, id){
        let novoRespondido = respondido
        let novaResposta = itensIniciais.map(resposta => {
            if(id == resposta.id){
                resposta.respondido = respondeu
                novoRespondido = respondido + 1
                setRespondido(novoRespondido)

                return resposta
            }else{
                return resposta
            }
        })

        setItensIniciais(novaResposta)
    }

    function atualizaValor(valorVindo, id){
        let novoValor

        novoValor = itensIniciais.map((item) => {
            if(item.id == id){
                let newValor = {...item}
                newValor.valor = valorVindo
                return newValor
            }else{
                return item
            }
        })

        setItensIniciais(novoValor)
    }

    function finalizar (){
        if(respondido != itensIniciais.length){
            alert("Responda todas as questões antes de finalizar!!!")
        }else{
            setJogoFinalizado(true)
        }
    }

    function novoJogo(){
        setJogoFinalizado(false)
        setRespondido(0)

        let novaResposta = itensIniciais.map(resposta => {
                resposta.respondido = false
                return resposta
            }
        )
        

        setItensIniciais(novaResposta)
    }

    return (    
        <>  
            {jogoFinalizado == false ? (
                    <div>
                        <h2>Pesquisa de Satisfação</h2> <br/>
                        {itensIniciais.map ((item) => 

                            <ItemAvaliado 
                                key={item.id}
                                nome={item.nome}
                                onResposta={(resp) => respondeu(resp, item.id)}
                                onChange={(valor) => atualizaValor(valor, item.id)}
                            />

                        )}
                        <br/><br/>

                        <button onClick={finalizar} >Finalizar</button>
                    </div>
                ):(
                    <div>
                        <h2>Obrigado por responder!</h2>
                        <label>Média: </label>

                        <br/><br/>
                        <button onClick={novoJogo}>Novo jogo</button>
                    </div>
                )
            }  
        </> 
    )   
}   