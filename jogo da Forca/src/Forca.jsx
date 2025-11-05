import React from 'react';

const Forca = ({ palavra, letrasSelecionadas }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center',gap: '10px', marginBottom: '20px' }}>
      {palavra.split('').map((letra, index) => (
        <button key={index} disabled>
          {letrasSelecionadas.includes(letra.toUpperCase()) ? letra : '-'}
        </button>
      ))}
    </div>
  );
};

export default Forca;