import NovoComponente from "./NovoComponente"

function App(props) {
  console.log(props)
  console.log(props.nome)
  console.log(props.endereco)

  return ( 
    <>
      <div>
        <NovoComponente/>
        Link para:
        <a href={props.endereco}>{props.nome}</a>
      </div>
    </>
  )
}

export default App
