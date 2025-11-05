// App.js
import React from 'react';
import { verso, listaCartas } from './Deck';
import Baralho from './Baralho';

export default function App() {
  return (
    <div>
      <Baralho tentativas={4} verso={verso} listaCartas={listaCartas} />
    </div>
  );
}