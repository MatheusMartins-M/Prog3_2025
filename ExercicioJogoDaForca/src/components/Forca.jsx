import { useState } from "react"

export default function Forca(props) {
    const palavraInicial = props.palavra.split("").map((letra, indice)=>(
        {
            id: indice + 1,
            valorCorreto: letra, 
            valorClicado: 0
        }
    ))

    const [digitos, setDigitos] = useState(palavraInicial)
    const [tentativas, setTentativas] = useState(3)

    function atualizaDigito(valor, id){
        let novosDigitos

        novosDigitos = digitos.map((digito) => {
            if(digito.id == id){
                let novoDigito = {...digito}
                novoDigito.valorClicado = valor
                return novoDigito
            }else{
                return digito
            }
        })

        setDigitos(novosDigitos)
    }

    function compara(){
        let errado = digitos.find((digito) => 
            digito.valorClicado != digito.valorCorreto)

        if(errado){
            setTentativas(tentativas - 1)
        }
    }

    

    return (
        <>
            <div className="Teclado">
                {digitos.map((digito)=> 
                <button 
                    key={digito.id}
                    onClick={(valor) => atualizaDigito(valor, digito.id)}>
                        {digito.valorClicado ? digito.valorCorreto : "-"}
                    </button>
                )}
            </div>
        </>
    )
}