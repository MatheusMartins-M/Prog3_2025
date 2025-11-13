import { useState } from "react"
import Tabela from "./Tabela"
import Cadastro from "./Cadastro"

const contatosFake =[
    {id: 1, nome: "Maria do exemplo", email: "maria@example.com"},
    {id: 2, nome: "João do exemplo", email: "joao@example.com"}
]
let maxID=3


export default function Contatos(props){
    const [contatos, setContatos] = useState(contatosFake)
    const [contatoEdicao, setContatoEdicao] = useState(null)
    
    function cadastrar(contato){
        let novosContatos

        if(contato.id){
            //edição
            novosContatos = contatos.map((contatoDoMap) => {
                if(contatoDoMap.id == contato.id){
                    return contato
                }else{
                    return contatoDoMap
                }
            })
            setContatoEdicao("")
        }else{
            //criação
            contato.id = maxID++
            novosContatos = [...contatos, contato]
        }
        
        setContatos(novosContatos)
    }

    function excluir(id){
        let novoContatos = contatos.filter(contato => contato.id != id)
        setContatos(novoContatos)
    }

    function editar(contato){
        setContatoEdicao(contato)
    }

    return <>
        <h1>CRUD Contato</h1>
        <Cadastro key={contatoEdicao?.id} editar={contatoEdicao} onCadastrar={cadastrar}/>
        <Tabela contatos={contatos} onExcluir={excluir} onEditar={editar}/>
        
    </>
}