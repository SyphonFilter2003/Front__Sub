import React from 'react';

function IMCList({ imcs }) {
  return (
    <div>
      <h2>Resultados</h2>
      <ul>
        {imcs.map((imc, index) => (
          <li key={index}>
            Peso: {imc.peso}kg, Altura: {imc.altura}m, IMC: {imc.imc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IMCList;