export default function Carta({ carta, onClick }) {
  const estilo = {
    border: carta.selecionada ? '2px solid red' : '1px solid black',
    backgroundColor: carta.achada ? 'green' : 'black',
    width: '60px',
    height: '60px',
    margin: '5px',
    fontSize: '20px',
  };

  return (
    <button style={estilo} onClick={onClick}>
      {carta.selecionada || carta.achada ? carta.nome : '*'}
    </button>
  );
}