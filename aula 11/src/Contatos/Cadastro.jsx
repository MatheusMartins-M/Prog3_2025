import { useState } from "react"

export default function Cadastro(props){
    const [nome, setNome] = useState(props?.editar?.nome || "")
    const [email, setEmail] = useState(props?.editar?.email || "")
    
    function mudarNome(event){
        setNome(event.target.value.toUpperCase())
    
    }
    
    function cadastrar(){
        if(!nome || nome.trim() == "" || !email || email.trim() == ""){
            alert("Preencha os campos!")
            return
        }
        const contato = {
            id: props?.editar?.id,
            nome: nome,
            email: email
        }

        props.onCadastrar(contato)
        
        setNome("")
        setEmail("")
    }



    return <div>
        <label>Nome: </label>
        <input value={nome} onChange={(mudarNome)}/>
        <br/>
        <label>E-mail: </label>
        <input value={email} onChange={(event) => setEmail(event.target.value)}/>
        <br/> <br/>
        <button onClick={cadastrar}>{props.editar ? "SALVAR" : "CADASTRAR"}</button>
        <br/> <br/>
        
    </div>
}