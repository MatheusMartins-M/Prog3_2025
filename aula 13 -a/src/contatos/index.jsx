import axios from "axios";
import { useEffect, useState } from "react"
const API = 'http://localhost:3000'

export default function Contatos(props){
    const [contatos, setContatos] = useState([])
    const [cadastrando, setCadastrando] = useState(false)
    const [contatoEditado, setContatoEditado] = useState(null)
    async function carregarDados(){
        console.log("Aqui");
        let retorno = await axios.get(API+"/contatos/")
        let contatosServidor = retorno.data
        console.log(contatosServidor);
        setContatos(contatosServidor)
    }

    useEffect(()=> {
        carregarDados()
    },[])   

    async function cadastrarContato(form){
        console.log(form);
        let nome = form.get("nome")
        let email = form.get("email")
        console.log(nome);
        console.log(email);
        const novoContato={
            nome:nome,
            email:email
        }
        let retorno
        if(contatoEditado) {
             retorno = await axios.put(API+"/contatos/"+contatoEditado.id, novoContato);
             console.log("Aqui")
             setContatoEditado(null);
        }else{
            retorno = await axios.post(API+"/contatos/",novoContato);
        }
        console.log(retorno);
        setCadastrando(false)
        carregarDados()     
    }
    async function excluirContato(id) {
        if(confirm("Tem certeza que deseja excluir?")){
            const retorno = await axios.delete(API+"/contatos/"+id);
            console.log(retorno);
            carregarDados();
        }   
    }
    async function editarContato(id) {
        setCadastrando(false)
        let retorno = await axios.get(API+"/contatos/"+id);
        let novoContatoEditar = retorno.data;
        setContatoEditado(novoContatoEditar)
        setCadastrando(true)
        console.log(contatoEditado);
        
    }

    if(contatos === null){
        return "Carregando...";
    }

    return <>
        <h2>{contatoEditado?"edição "+contatoEditado.id:"Cadastrar"}</h2>
        <button onClick={()=>setCadastrando(true)}>Cadastrar Novo Contato</button>
        {cadastrando?<dialog open={cadastrando}>{contatoEditado?"Edição":"Cadastrar"}
            <br/><br/>
            <form action={(form)=>cadastrarContato(form)}>
                <label>Nome: <input required name="nome" defaultValue={contatoEditado?.nome}></input></label>
                <br/><br/>
                <label>E-mail: <input required name="email" type="mail" defaultValue={contatoEditado?.email}></input></label>
                <br/><br/>
                <button type="submit">{contatoEditado?"Atualizar":"Cadastrar"}</button>
                <button type="reset" onClick={()=>{
                setCadastrando(false)
                setContatoEditado(null)
                }}>Fechar</button>
            </form>
        </dialog>:""}
        <br/><br/>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th><th>Nome</th><th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                {contatos.map(contato=><tr key={contato.id}>
                    <td>{contato.id}</td>
                    <td>{contato.nome}</td>
                    <td>{contato.email}</td>
                    <td>
                        <button onClick={()=>editarContato(contato.id)}>Editar</button>
                        <button onClick={()=>excluirContato(contato.id)}>Excluir</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </>

}