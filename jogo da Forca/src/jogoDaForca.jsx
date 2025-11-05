import { useState, useEffect } from 'react';
import Forca from './Forca';
import Teclado from './Teclado';


const JogoDaForca = ({ palavra }) => {
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState('');
  const palavraUpper = palavra.toUpperCase();

  const verificarFimDeJogo = (novasLetras, errosAtualizados) => {
    const todasLetrasAdivinhadas = palavraUpper
      .split('')
      .every((letra) => novasLetras.includes(letra));

    if (todasLetrasAdivinhadas) {
      setJogoFinalizado(true);
      setMensagemFinal('Você ganhou!');
    } else if (errosAtualizados >= 3) {
      setJogoFinalizado(true);
      setMensagemFinal('Você perdeu!');
    }
  };

  const handleLetraClick = (letra) => {
    if (jogoFinalizado || letrasSelecionadas.includes(letra)) return;

    const novasLetras = [...letrasSelecionadas, letra];
    setLetrasSelecionadas(novasLetras);

    if (!palavraUpper.includes(letra)) {
      const novosErros = erros + 1;
      setErros(novosErros);
      verificarFimDeJogo(novasLetras, novosErros);
    } else {
      verificarFimDeJogo(novasLetras, erros);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Jogo da Forca</h2>
      <Forca palavra={palavraUpper} letrasSelecionadas={letrasSelecionadas} />
      <Teclado
        onLetraClick={handleLetraClick}
        letrasSelecionadas={letrasSelecionadas}
        jogoFinalizado={jogoFinalizado}
      />
      <p>Erros: {erros}</p>
      {mensagemFinal && <h3>{mensagemFinal}</h3>}
    </div>
  );
};

export default JogoDaForca;


/*
const JogoDaForca = ({ palavra }) => {
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
  const [erros, setErros] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);
  const palavraUpper = palavra.toUpperCase();

  const verificarFimDeJogo = (novasLetras) => {
    const todasLetrasAdivinhadas = palavraUpper
      .split('')
      .every((letra) => novasLetras.includes(letra));

    if (todasLetrasAdivinhadas) {
      setJogoFinalizado(true);
      return 'Parabéns! Você ganhou!';
    }

    if (erros >= 3) {
      setJogoFinalizado(true);
      return 'Você perdeu!';
    }

    return null;
  };

  const handleLetraClick = (letra) => {
    if (jogoFinalizado || letrasSelecionadas.includes(letra)) return;

    const novasLetras = [...letrasSelecionadas, letra];
    setLetrasSelecionadas(novasLetras);

    if (!palavraUpper.includes(letra)) {
      setErros((prev) => prev + 1);
    }

    verificarFimDeJogo(novasLetras);
  };

  const mensagemFinal = verificarFimDeJogo(letrasSelecionadas);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Jogo da Forca</h2>
      <Forca palavra={palavraUpper} letrasSelecionadas={letrasSelecionadas} />
      <Teclado
        onLetraClick={handleLetraClick}
        letrasSelecionadas={letrasSelecionadas}
        jogoFinalizado={jogoFinalizado}
      />
      <p>Erros: {erros}</p>
      {mensagemFinal && <h3>{mensagemFinal}</h3>}
    </div>
  );
};

export default JogoDaForca;

*/