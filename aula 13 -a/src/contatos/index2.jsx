import axios from "axios";
import { useEffect, useState } from "react";

export default function Contatos(props){
    const [contatos, setcontatos] = useState([]);
    async function carregarDados(){
        console.log("Aqui");
        let retorno = await axios.get("http://localhost:3000/contatos/");
        let contatosServidor = retorno.data;
        console.log(contatosServidor);
        setcontatos(contatosServidor);
    }
    useEffect(()=>{
        carregarDados();
    },[]);
    if(contatos===null){
        return "Carregando...."
    }
        return<>Contatos
            <table border={1}><thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>E-mail</th>
                </tr>
                </thead>
                <tbody>
                    {contatos.map(contato =><tr key={contato.id}>
                        <td>{contato.id}</td>
                        <td>{contato.nome}</td>
                        <td>{contato.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
}
