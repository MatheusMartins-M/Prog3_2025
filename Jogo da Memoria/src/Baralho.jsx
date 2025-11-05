import { useState, useEffect } from 'react';
import Carta from './Carta';

function embaralhar(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Baralho() {
  const nomes = ['A', 'B', 'C', 'D', 'E'];
  const criarCartas = (conjunto) =>
    nomes.map((nome, index) => ({
      id: index,
      nome,
      selecionada: false,
      achada: false,
      conjunto,
    }));

  const [cartasA, setCartasA] = useState([]);
  const [cartasB, setCartasB] = useState([]);
  const [selecionadaA, setSelecionadaA] = useState(null);
  const [selecionadaB, setSelecionadaB] = useState(null);
  const [tentativas, setTentativas] = useState(5);
  const [erro, setErro] = useState(false);
  const [vitoria, setVitoria] = useState(false);
  const [derrota, setDerrota] = useState(false);

  useEffect(() => {
    const embaralhadasA = embaralhar(criarCartas('A'));
    const embaralhadasB = embaralhar(criarCartas('B'));
    setCartasA(embaralhadasA);
    setCartasB(embaralhadasB);
  }, []);

  useEffect(() => {
    if (selecionadaA !== null && selecionadaB !== null) {
      validarSelecao();
    }
  }, [selecionadaA, selecionadaB]);

  const validarSelecao = () => {
    const cartaA = cartasA[selecionadaA];
    const cartaB = cartasB[selecionadaB];

    if (cartaA.id === cartaB.id) {
      const novasA = cartasA.map((c, i) =>
        i === selecionadaA ? { ...c, achada: true, selecionada: false } : c
      );
      const novasB = cartasB.map((c, i) =>
        i === selecionadaB ? { ...c, achada: true, selecionada: false } : c
      );
      setCartasA(novasA);
      setCartasB(novasB);
      setSelecionadaA(null);
      setSelecionadaB(null);
      verificarVitoria(novasA, novasB);
    } else {
      setErro(true);
      setTentativas((prev) => prev - 1);
      if (tentativas - 1 === 0) {
        setDerrota(true);
      }
    }
  };

  const verificarVitoria = (a, b) => {
    const todasAchadas = [...a, ...b].every((c) => c.achada);
    if (todasAchadas) {
      setVitoria(true);
    }
  };

  const selecionarCarta = (index, conjunto) => {
    if (erro || vitoria || derrota) return;

    if (conjunto === 'A' && selecionadaA === null) {
      const novas = cartasA.map((c, i) =>
        i === index ? { ...c, selecionada: true } : c
      );
      setCartasA(novas);
      setSelecionadaA(index);
    }

    if (conjunto === 'B' && selecionadaB === null) {
      const novas = cartasB.map((c, i) =>
        i === index ? { ...c, selecionada: true } : c
      );
      setCartasB(novas);
      setSelecionadaB(index);
    }
  };

  const tentarNovamente = () => {
    const novasA = cartasA.map((c) => ({ ...c, selecionada: false }));
    const novasB = cartasB.map((c) => ({ ...c, selecionada: false }));
    setCartasA(novasA);
    setCartasB(novasB);
    setSelecionadaA(null);
    setSelecionadaB(null);
    setErro(false);
  };

  return (
    <div>
      <h2>Jogo da Memória</h2>
      <p>Tentativas restantes: {tentativas}</p>

      <div style={{ display: 'flex',flexDirection: 'column', gap: '10px' }}>
        <div>
          <h3>Conjunto A :</h3>
          {cartasA.map((carta, index) => (
            <Carta
              key={`A-${index}`}
              carta={carta}
              onClick={() => selecionarCarta(index, 'A')}
            />
          ))}
        </div>

        <div>
          <h3>Conjunto B :</h3>
          {cartasB.map((carta, index) => (
            <Carta
              key={`B-${index}`}
              carta={carta}
              onClick={() => selecionarCarta(index, 'B')}
            />
          ))}
        </div>
      </div>

      {erro && !vitoria && !derrota && (
        <div>
          <p>Você errou! Tentativas restantes: {tentativas}</p>
          <button onClick={tentarNovamente}>Tentar Novamente</button>
        </div>
      )}

      {vitoria && <h3>Você Venceu!</h3>}
      {derrota && <h3>Você perdeu.</h3>}
    </div>
  );
}


/*
const nomes = ['A', 'B', 'C', 'D', 'E'];

function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function Baralho() {
  const [cartas, setCartas] = useState(() =>
    embaralhar([...nomes, ...nomes]).map((nome, index) => ({
      id: index,
      nome,
      selecionada: false,
      achada: false,
    }))
  );

  const [selecionadas, setSelecionadas] = useState([]);
  const [tentativas, setTentativas] = useState(5);
  const [mensagem, setMensagem] = useState('');

  const handleClick = (index) => {
    const carta = cartas[index];
    if (carta.achada || carta.selecionada || selecionadas.length === 2) return;

    const atualizadas = cartas.map((c, i) =>
      i === index ? { ...c, selecionada: true } : c
    );
    setCartas(atualizadas);
    const novasSelecionadas = [...selecionadas, carta];
    setSelecionadas(novasSelecionadas);

    if (novasSelecionadas.length === 2) {
      const [c1, c2] = novasSelecionadas;

      // Usando find para localizar outra carta com o mesmo nome
      const cartaDuplicada = cartas.find(
        (c) => c.nome === c1.nome && c.id !== c1.id
      );

      if (cartaDuplicada && c1.nome === c2.nome) {
        const atualizadas = cartas.map((c) =>
          c.nome === c1.nome ? { ...c, achada: true, selecionada: false } : c
        );
        setCartas(atualizadas);
        setMensagem('Acertou!');
      } else {
        setTentativas((t) => t - 1);
        setMensagem('Errou! Tente novamente.');
        setTimeout(() => {
          setCartas((prev) =>
            prev.map((c) =>
              c.selecionada && !c.achada ? { ...c, selecionada: false } : c
            )
          );
        }, 1000);
      }

      setSelecionadas([]);
    }
  };

  const venceu = cartas.every((c) => c.achada);
  const perdeu = tentativas === 0 && !venceu;

  return (
    <div>
      <h2>Jogo da Memória</h2>
      <p>Tentativas restantes: {tentativas}</p>
      <div>
        {cartas.map((carta, index) => (
          <Carta key={index} carta={carta} onClick={() => handleClick(index)} />
        ))}
      </div>
      <p>{mensagem}</p>
      {venceu && <h3>Você venceu!</h3>}
      {perdeu && <h3>Você perdeu.</h3>}
    </div>
  );
}




export default function Baralho() {
  const [cartas, setCartas] = useState(() =>
    embaralhar([...nomes, ...nomes]).map((nome, index) => ({
      id: index,
      nome,
      selecionada: false,
      achada: false,
    }))
  );

  const [selecionadas, setSelecionadas] = useState([]);
  const [tentativas, setTentativas] = useState(5);
  const [mensagem, setMensagem] = useState('');

  const handleClick = (index) => {
    if (cartas[index].achada || cartas[index].selecionada || selecionadas.length === 2) return;

    const novasCartas = cartas.map((carta, i) =>
      i === index ? { ...carta, selecionada: true } : carta
    );
    const novasSelecionadas = [...selecionadas, index];

    setCartas(novasCartas);
    setSelecionadas(novasSelecionadas);

    if (novasSelecionadas.length === 2) {
      const [i1, i2] = novasSelecionadas;
      if (cartas[i1].nome === cartas[i2].nome) {
        const atualizadas = novasCartas.map((carta, i) =>
          i === i1 || i === i2 ? { ...carta, achada: true } : carta
        );
        setCartas(atualizadas);
        setMensagem('Parabéns! Você encontrou uma combinação.');
      } else {
        setTentativas((t) => t - 1);
        setMensagem('Errou! Tente novamente.');
        setTimeout(() => {
          setCartas((prev) =>
            prev.map((carta) =>
              carta.selecionada && !carta.achada ? { ...carta, selecionada: false } : carta
            )
          );
        }, 1000);
      }
      setSelecionadas([]);
    }
  };

  const venceu = cartas.every((c) => c.achada);
  const perdeu = tentativas === 0 && !venceu;

  return (
    <div>
      <h2>Jogo da Memória</h2>
      <p>Tentativas restantes: {tentativas}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '300px' }}>
        {cartas.map((carta, index) => (
          <Carta key={index} carta={carta} onClick={() => handleClick(index)} />
        ))}
      </div>
      <p>{mensagem}</p>
      {venceu && <h3>Você venceu!</h3>}
      {perdeu && <h3>Você perdeu.</h3>}
    </div>
  );
}

*/