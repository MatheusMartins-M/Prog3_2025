import './App.css'
import MeuComponente from './MeuComponente'
import Questionario from './Questionario'
import listaPerguntas from './listaPerguntas'

function App() {

  return (
    <>
      <Questionario listaPerguntas={listaPerguntas} 
      onFinalizou={(questionarioRespondido)=>{
        console.log(questionarioRespondido)
      }} />
    </>
  )
}

export default App
