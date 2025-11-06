import carinhaFeliz from './assets/bomDesativado.png'
import carinhaTriste from './assets/ruimDesativado.png'
import carinhaNeutra from './assets/neutroDesativado.png'
import carinhaFelizAtiva from './assets/bomAtivado.png'
import carinhaTristeAtiva from './assets/ruimAtivado.png'
import carinhaNeutraAtiva from './assets/neutroAtivado.png'

import { useState } from 'react'

export default function ItemAvaliado(props){
    const [caraTriste, setCaraTriste] = useState(false)
    const [caraNeutra, setCaraNeutra] = useState(false)
    const [caraFeliz, setCaraFeliz] = useState(false)
    const [valor, setValor] = useState(0)

    const nomeDoItem = props.nome

    function mudaCara(nome){
        const trocaValor = true
        let troca = valor

        if(nome == "caraFeliz"){
            setCaraFeliz(trocaValor)
            setCaraNeutra(false)
            setCaraTriste(false)

            troca = 5
            setValor(troca)
            props.onChange(troca)


        } else if(nome == "caraNeutra"){
            setCaraNeutra(trocaValor)
            setCaraFeliz(false)
            setCaraTriste(false)

            troca = 3
            setValor(troca)
            props.onChange(troca)

        }else if (nome == "caraTriste"){
            setCaraTriste(trocaValor)
            setCaraFeliz(false)
            setCaraNeutra(false)

            troca = 0
            setValor(troca)
            props.onChange(troca)
        }

        props.onResposta(true)
    }

    return (
        <>
            <label>{nomeDoItem}</label>
            <br/><br/>
            {caraTriste == false ? (
                <img onClick={() => mudaCara("caraTriste")} src={carinhaTriste} />
            ):(
                <img src={carinhaTristeAtiva}/>
            )
            }

            {caraNeutra == false ? (
                <img onClick={() => mudaCara("caraNeutra")} src={carinhaNeutra} />
            ):(
                <img src={carinhaNeutraAtiva} />
            )
            }

            {caraFeliz == false ? (
                <img onClick={() => mudaCara("caraFeliz")} src={carinhaFeliz} />
            ):(
                <img src={carinhaFelizAtiva} />
            )
            }
            
            <br/><br/>

        </>
    )
}