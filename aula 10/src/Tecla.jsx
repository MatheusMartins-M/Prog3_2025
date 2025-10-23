import { useState } from "react"
import adicionar from "./assets/adicionar.png"
import remover from "./assets/remover.png"
import proibido from "./assets/proibido.png"
import "./App.css"

export default function Tecla(props){
    const [valor, setValor] = useState(0)

    function incrementa(){
        let somar = valor
        somar = valor + 1
        setValor(somar)
        props.onChange(somar)
        
    }

    function decrementa(){
        let diminuir = valor
        diminuir = valor - 1
        setValor(diminuir)
        props.onChange(diminuir)
    }

    return <span style={{fontSize:"30px"}}>
        {valor > 0 ?
            <img onClick={decrementa} src={remover} />
            :
            <img src={proibido} />}
        
        {valor}
        {valor < 9 ?
            <img onClick={incrementa} src={adicionar}/>
            :
            <img src={proibido}/>
        }
        
        
    </span>
    
}

//<img src={remover} onClick={decrementa}/> {valor} <img src={adicionar} onClick={incrementa}/>
        