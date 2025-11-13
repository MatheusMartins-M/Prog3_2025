export default function Tabela(props){
    //props.contatos

    function excluir(contatoTodo){
        if(confirm("Excluir o "+ contatoTodo.nome +" ?")){
            props.onExcluir(contatoTodo.id)
        }
    }

    function editar(contatoTodo){
        props.onEditar(contatoTodo)
    }

    return <>
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {props.contatos.map((contato) => 
                    <tr key={contato.id}>
                        <td>{contato.id}</td>
                        <td>{contato.nome}</td>
                        <td>{contato.email}</td>
                        <td>
                            <button onClick={()=> editar(contato)}>EDITAR</button>
                            <button onClick={()=> excluir(contato)}>DELETAR</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}