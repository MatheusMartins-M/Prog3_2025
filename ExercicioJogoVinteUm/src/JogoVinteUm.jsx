import { useState } from "react"
import Carta from "./Carta"

export default function JogoVinteUm(props){
    const [mensagem, setMensagem] = useState("")
    const [tentativas, setTentativas] = useState(props.tentativas)

    return (
        <>
            <Carta/>
        </>
    )
}