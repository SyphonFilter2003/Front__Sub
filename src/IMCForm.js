import React, { useState } from 'react';

function IMCForm({ cadastrarImc }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoIMC = {
      peso: parseFloat(peso),  
      altura: parseFloat(altura),
    };

    cadastrarImc(novoIMC);

    setPeso('');
    setAltura('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Peso:</label>
        <input
          type="number"
          step="0.1"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div>
        <label>Altura:</label>
        <input
          type="number"
          step="0.01"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <button type="submit">Cadastrar IMC</button>
    </form>
  );
}

export default IMCForm;
