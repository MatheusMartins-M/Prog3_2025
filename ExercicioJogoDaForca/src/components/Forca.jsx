import { useState } from "react";

export default function Forca(props) {
    const nomeAdivinha = props.palavra;
    const [letrasUsadas, setLetrasUsadas] = useState([]);

    function verificarLetra(letra) {
        setLetrasUsadas([...letrasUsadas, letra]);
        console.log(letrasUsadas);
    }

    return (
        <>
            <div className="forca">
                {nomeAdivinha.split("").map((letra, index) => (
                    <button key={index} onClick={verificarLetra}>
                        {letrasUsadas.includes(letra) ? letra : "-"}
                    </button>
                ))}
            </div>

        </>
    )
}