import React, { useState } from 'react';

function FruitPicker() {
  // Inicializa o estado com o valor padrão desejado
  const [selectedFruit, setSelectedFruit] = useState('orange');

  const fruits = [
    { value: 'apple', label: 'Maçã' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Laranja' },
  ];

  // Handler para atualizar o estado quando a seleção muda
  const handleChange = (event) => {
    setSelectedFruit(event.target.value);
  };

  return (
    <label>
      Escolha uma fruta:
      <select value={selectedFruit} onChange={handleChange}>
        {fruits.map((fruit) => (
          <option key={fruit.value} value={fruit.value}>
            {fruit.label}
          </option>
        ))}
      </select>
      <p>Sua fruta selecionada é: {selectedFruit}</p>
    </label>
  );
}

export default FruitPicker;
