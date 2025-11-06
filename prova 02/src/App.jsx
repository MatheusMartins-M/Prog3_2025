import './App.css'
import PesquisaSatisfacao from './PesquisaSatisfacao'

function App() {

  return (
    <>
        <PesquisaSatisfacao 
          itens={
            [
              "Atendimento",
              "Tempo de Espera",
              "Qualidade"

            ]
          }/>
    </>
  )
}

export default App
