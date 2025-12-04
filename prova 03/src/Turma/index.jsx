import axios from "axios";
import { useEffect, useState } from "react"
const API = "http://localhost:3000"
import eletronica from "../assets/eletronica.png"
import informatica from "../assets/informatica.png"
import lazer from "../assets/lazer.png"

export default function Turma (){
    const [turmas, setTurmas] = useState([])
    const [cadastrando, setCadastrando] = useState(false)
    const [turmaEditada, setTurmaEditada] = useState(null)
    const [cursoSelecionado, setCursoSelecionado] = useState("")

    //const cursos = [{id: 1, nome:"eletronica"},{id:2, nome:"informatica"},{id: 3, nome:"lazer"}]

    async function carregarDados() {
        let retorno = await axios.get(API+"/turmas/")
        let turmasServidor = retorno.data
        
        setTurmas(turmasServidor)
    }
    
    const handleChange = (event) => {
        setCursoSelecionado(event.target.value)
    }
    async function cadastrarTurma(form) {
        console.log(form)
        let disciplina = form.get("disciplina")
        let curso = cursoSelecionado
        let numeroAlunos = form.get("alunos")

        const novaTurma = {
            disciplina: disciplina,
            curso: curso,
            alunos: numeroAlunos
        }

        let retorno

        if(turmaEditada){
            retorno = await axios.put(API+"/turmas/"+turmaEditada.id, novaTurma)
            setTurmaEditada(null)
        }else{
            retorno = await axios.post(API+"/turmas/", novaTurma)
        }

        console.log(retorno)
        setCadastrando(false)
        carregarDados() 
    }
    async function zerarAlunos(turma){
        const numeroAlunos = 0
        let disciplina = turma.disciplina
        let curso = turma.curso
        let alunos = numeroAlunos

        const novaTurma = {
            disciplina: disciplina,
            curso: curso,
            alunos: alunos
        }
        
        let retorno = await axios.put(API+"/turmas/"+turma.id, novaTurma)

        carregarDados()
        
    }

    async function excluirTurma(turma) {
        if(confirm("Tem certeza que deseja excluir a turma "+turma.disciplina+
            " do curso "+turma.curso+" de id "+turma.id+"?")){
            const retorno = await axios.delete(API+"/turmas/"+turma.id)
            console.log(retorno)
            carregarDados()
        }
    }

    async function editarTurma(id) {
        setCadastrando(false)

        let retorno = await axios.get(API+"/turmas/"+id)
        let novaTurmaEditar = retorno.data

        setTurmaEditada(novaTurmaEditar)
        setCadastrando(true)
        
    }

    useEffect(() => {
        carregarDados()
    },[])

    return (
        <div>
            <h1>Turmas</h1>
            <br/> <br/>
            <button onClick={()=>setCadastrando(true)}>Cadastrar Nova Turma</button>
            {cadastrando?<dialog open={cadastrando}>{turmaEditada?"Editando turma":"Cadastrando turma"}
                <form action={(form) => cadastrarTurma(form)}>
                <label>Disciplina: <input required name="disciplina" defaultValue={turmaEditada?.disciplina}></input></label>
                <br/><br/>
                <label>Curso: <select value={cursoSelecionado} onChange={handleChange}>
                    <option value="" disabled="">Selecione o curso...</option>
                    <option value="Eletrônica">Eletrônica</option>
                    <option value="Informática">Informática</option>
                    <option value="Lazer">Lazer</option>
                </select></label>
                <br/><br/>
                <label>Número de alunos: <input required name="alunos" type="number"></input></label>
                <br/><br/>
                <button type="submit">{turmaEditada?"Atualizar":"Cadastrar"}</button>
                <button type="reset" onClick={() =>{
                    setCadastrando(false)
                    setTurmaEditada(null)
                    setCursoSelecionado("")
                }}>Fechar</button>
            </form>
            </dialog>:""}
            <br/> <br/>
            
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Disciplina</th>
                        <th>Curso</th>
                        <th>Alunos</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {turmas.map(turma => 
                        <tr key={turma.id}>
                            <td>{turma.id}</td>
                            <td>{turma.disciplina}</td>
                            <td>
                                {turma.curso == "Eletrônica" ? <img src={eletronica} title="Eletrônica"/> 
                                : turma.curso == "eletrônica" ? <img src={eletronica} title="eletrônica"/> 
                                : turma.curso == "Eletronica" ? <img src={eletronica} title="Eletronica"/> 
                                : turma.curso == "eletronica" ? <img src={eletronica} title="eletronica"/> 
                                : turma.curso == "Informática" ? <img src={informatica} title="Informática"/>
                                : turma.curso == "informática" ? <img src={informatica} title="informática"/>
                                : turma.curso == "Informatica" ? <img src={informatica} title="Informatica"/>
                                : turma.curso == "informatica" ? <img src={informatica} title="informatica"/>
                                : <img src={lazer} title="Lazer"/> }
                            </td>
                            <td>{turma.alunos}</td>
                            <td>
                                <button onClick={()=>editarTurma(turma.id)}>Editar</button>
                                <button disabled={turma.alunos == 0 ? true:false} onClick={()=>zerarAlunos(turma)}>Zerar Alunos</button>
                                <button disabled={turma.alunos != 0 ? true:false} onClick={()=>excluirTurma(turma)}>Excluir</button>

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}