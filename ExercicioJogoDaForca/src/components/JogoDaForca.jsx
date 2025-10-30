//import { useState } from "react";
import { useState } from "react";
import Forca from "./Forca";
import Teclado from "./Teclado";

export default function JogoDaForca(props){
    const [letrasTentadas, setLetrasTentadas] = useState([])
    const [tentativas, setTentativas] = useState(0);
    const maximo = 3
    const gameOver = tentativas >= maximo

    function handleLetraClicou(letra){
        if (gameOver) return

        setLetrasTentadas((digito) => [...digito, letra])
    
        if(!props.palavra.includes(letra)){
            setTentativas((novaTentativa) => novaTentativa + 1)
        }
    }

    function handleReiniciar(){
        setLetrasTentadas([])
        setTentativas(0)
    }

    return (
        <div>
            <Forca palavra={props.palavra} letrasTentadas={letrasTentadas} />
            <br />

            {/* Teclado é desabilitado quando o jogo acaba */}
            <Teclado 
                onLetraClicou={handleLetraClicou} 
                letrasTentadas={letrasTentadas}
                disabled={gameOver}
            />

            <br />
            <label>Tentativas erradas: {tentativas}/{maximo}</label>

            {gameOver && (
                <div>
                    <br/>

                    Fim de jogo! A palavra era: <strong>{props.palavra}</strong>

                <br/>
                <button type="button" onClick={handleReiniciar}>Tentar novamente</button>
                </div>
            )}
        </div>
    );
};