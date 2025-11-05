import React from 'react';

export default function Carta({ carta, verso, virada, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: virada ? 'default' : 'pointer' ,
    transition: 'transform 0.3s'
    }}>
      <img
        src={virada ? carta.img : verso} //validar se a carta está virada, com uma fução ternária
        alt={`Carta ${carta.id}`} 
        style={{ width: '100px', margin: '10px'}}
      />
    </div>
  );
}
/*
carta - objeto da carta (com id,valor,img, etc.)
verso - a imagem do verso da carta (quando ela está virada para baixo)
virada - um booleano que indica se a carta já foi virada
onclick - função que será chamada quando o jogador clicar na carta

cursor: pointer: mostra a mãozinha 🖐️, indicando que o elemento é clicável
cursor: default: mostra o cursor padrão (geralmente uma seta), indicando que o elemento não é interativo.
- Se a carta já foi virada, o cursor será o padrão (não clicável).
- Se a carta ainda está virada para baixo, o cursor será pointer, indicando que o jogador pode clicar para virar.
*/