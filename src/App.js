import React, { useState, useEffect } from 'react';
import IMCForm from './IMCForm';
import IMCList from './IMCList';

function App() {
  const [imcs, setImcs] = useState([]);

  // Função para buscar IMCs
  const fetchImcs = async () => {
    const response = await fetch('http://localhost:5279/api/imcs');
    const data = await response.json();
    setImcs(data);
  };

  // Função para cadastrar um novo IMC
  const cadastrarImc = async (novoIMC) => {
    const response = await fetch('http://localhost:5279/api/imcs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoIMC),
    });

    if (response.ok) {
      fetchImcs();
    } else {
      console.error('Erro ao cadastrar IMC');
    }
  };

  // Função para alterar um IMC
  const alterarImc = async (id, imcAlterado) => {
    const response = await fetch(`http://localhost:5279/api/imcs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imcAlterado),
    });

    if (response.ok) {
      fetchImcs();
    } else {
      console.error('Erro ao alterar IMC');
    }
  };

  useEffect(() => {
    fetchImcs();
  }, []);

  return (
    <div>
      <h1>IMCs dos Alunos</h1>
      <IMCForm cadastrarImc={cadastrarImc} alterarImc={alterarImc} />
      <IMCList imcs={imcs} />
    </div>
  );
}

export default App;
