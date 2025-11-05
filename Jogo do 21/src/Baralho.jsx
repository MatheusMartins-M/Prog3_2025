// JogoVinteUm.js
import { useState } from 'react';
import Carta from './Carta';

export default function Baralho({ tentativas, verso, listaCartas }) {
  const [cartasViradas, setCartasViradas] = useState([]);
  const [pontuacao, setPontuacao] = useState(0);
  const [tentativasRestantes, setTentativasRestantes] = useState(tentativas);
  const [mensagem, setMensagem] = useState('');
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const virarCarta = (id) => {
    if (jogoFinalizado || cartasViradas.includes(id) || tentativasRestantes === 0) return;

    const carta = listaCartas.find((c) => c.id === id);
    const novaPontuacao = pontuacao + carta.valor;
    const novasTentativas = tentativasRestantes - 1;

    const novasCartasViradas = [...cartasViradas, id];
    setCartasViradas(novasCartasViradas);
    setPontuacao(novaPontuacao);
    setTentativasRestantes(novasTentativas);

    if (novaPontuacao === 21) {
      setMensagem('Parabéns você ganhou!');
      setJogoFinalizado(true);
    } else if (novaPontuacao > 21) {
      setMensagem('Você perdeu!');
      setJogoFinalizado(true);
    } else if (novasTentativas === 0) {
      setMensagem(`Você terminou com ${novaPontuacao} pontos!`);
      setJogoFinalizado(true);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Jogo do 21</h2>
      <p>Tentativas restantes: {tentativasRestantes}</p>
      <p>Pontuação atual: {pontuacao}</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {listaCartas.map((carta) => (
          <Carta
            key={carta.id}
            carta={carta}
            verso={verso}
            virada={cartasViradas.includes(carta.id)}
            onClick={() => virarCarta(carta.id)}
          />
        ))}
      </div>
      {mensagem && <h3>{mensagem}</h3>}
    </div>
  );
}


/*
const [cartasViradas, setCartasViradas] = useState([]);
const [pontuacao, setPontuacao] = useState(0);
const [tentativasRestantes, setTentativasRestantes] = useState(tentativas);
const [mensagem, setMensagem] = useState('');
const [jogoFinalizado, setJogoFinalizado] = useState(false);

- cartasViradas: armazena os IDs das cartas que já foram viradas.
- pontuacao: soma dos valores das cartas viradas.
- tentativasRestantes: quantas cartas ainda podem ser viradas.
- mensagem: exibe o resultado final do jogo.
- jogoFinalizado: impede que o jogador continue jogando após o fim

--function 
const virarCarta = (id) => {
  if (jogoFinalizado || cartasViradas.includes(id) || tentativasRestantes === 0) return;

- Impede virar cartas se:
- o jogo já terminou,
- a carta já foi virada,
- não há mais tentativas.

  const carta = listaCartas.find((c) => c.id === id);
  const novaPontuacao = pontuacao + carta.valor;
  const novasTentativas = tentativasRestantes - 1;

- Encontra a carta clicada.
- Soma seu valor à pontuação.
- Reduz o número de tentativas.

  const novasCartasViradas = [...cartasViradas, id];
  setCartasViradas(novasCartasViradas);
  setPontuacao(novaPontuacao);
  setTentativasRestantes(novasTentativas);

- Atualiza os estados com a nova carta virada, nova pontuação e tentativas restantes.

  if (novaPontuacao === 21) {
    setMensagem('Parabéns você ganhou!');
    setJogoFinalizado(true);
  } else if (novaPontuacao > 21) {
    setMensagem('Você perdeu!');
    setJogoFinalizado(true);
  } else if (novasTentativas === 0) {
    setMensagem(`Você terminou com ${novaPontuacao} pontos!`);
    setJogoFinalizado(true);
  }
};
- Verifica as condições de fim de jogo:
- Vitória: pontuação exata de 21.
- Derrota: passou de 21.
- Fim das tentativas: mostra pontuação final


--utilizando MAP
const virarCarta = (id) => {
  if (jogoFinalizado || cartasViradas.includes(id) || tentativasRestantes === 0) return;

  let novaPontuacao = pontuacao;
  const novasCartasViradas = listaCartas
    .map((carta) => {
      if (carta.id === id) {
        novaPontuacao += carta.valor;
        return carta.id;
      }
      return null;
    })
    .filter((idVirada) => idVirada !== null);

  const todasViradas = [...cartasViradas, ...novasCartasViradas];
  const novasTentativas = tentativasRestantes - 1;

  setCartasViradas(todasViradas);
  setPontuacao(novaPontuacao);
  setTentativasRestantes(novasTentativas);

  if (novaPontuacao === 21) {
    setMensagem('Parabéns você ganhou!');
    setJogoFinalizado(true);
  } else if (novaPontuacao > 21) {
    setMensagem('Você perdeu!');
    setJogoFinalizado(true);
  } else if (novasTentativas === 0) {
    setMensagem(`Você terminou com ${novaPontuacao} pontos!`);
    setJogoFinalizado(true);
  }
};
  */