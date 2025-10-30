//import { useRef } from "react"

import { useState } from "react"

export default function Formulario(){
    const [contatos, setContatos] = useState([])
    const [maxID, setMaxId] = useState([])

    function enviar (formData){
        console.log(formData)
        const nome = formData.get("nome")
        const email = formData.get("email")
        const notificar = formData.get("notificar")
        
        let novoContato = {
            id:maxID,
            nome:nome,
            email:email,
            notificar:notificar
        }
        let novoContatos = [...contatos, novoContato]
        setContatos(novoContatos)
        setMaxId(maxID + 1)
        alert("Nome: "+ nome +" - Email: "+ email +" - Notificar: "+ notificar)
    }

    function excluir(id){
        let novoContato = contatos.filter(contato => contato.id != id)
        setContatos(novoContato)
    }

    return (
        <>
            <div>
                <form action={enviar}>
                    <label>Nome: <input name="nome" required/></label>
                    <br/>
                    <br/>
                    <label>E-mail: <input type="email" name="email"/></label>
                    <br/>
                    <br/>
                    <label><input type="radio" name="notificar" value="Sim"/>Sim</label>
                    <label><input type="radio" name="notificar" value="Não"/>Não</label>
                    <br/>
                    <br/>
                    <button type="submit">Enviar</button>
                </form>

                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>E-MAIL</th>
                            <th>NOTIFICAR</th>
                            <th>AÇÃO</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {contatos.map(contato => 
                        <tr>
                            <td>{contato.id}</td>
                            <td>{contato.nome}</td>
                            <td>{contato.email}</td>
                            <td>{contato.notificar}</td>
                            <td>
                                <button onClick={()=> excluir(contato.id)}>Excluir</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
            
        </>
    )

}

/*
const formRef = useRef(null)
    function enviar(evento){
        evento.preventDefault()
        console.log(formRef)
        const form = formRef.current
        console.log('Nome:', form.elements.nome.value)
        console.log('Email:', form.elements.email.value)
        alert("enviou")
    }

<form action={enviar}>
                    <label>Nome: <input name="nome" required/></label>
                    <br/>
                    <br/>
                    <label>E-mail: <input type="email" name="email"/></label>
                    <br/>
                    <br/>
                    <label>Senha: <input type="password" name="senha"/></label>
                    <br/>
                    <br/>
                    <button type="submit">Enviar</button>
                </form>
*/