import React from 'react';

const Teclado = ({ onLetraClick, letrasSelecionadas, jogoFinalizado }) => {
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div style={{ display: 'flex', justifyContent: 'center',flexWrap: 'wrap', gap: '5px' }}>
      {alfabeto.map((letra) => (
        <button
          key={letra}
          onClick={() => onLetraClick(letra)}
          disabled={letrasSelecionadas.includes(letra) || jogoFinalizado}
        >
          {letra}
        </button>
      ))}
    </div>
  );
};

export default Teclado;