import './App.css';
import Cabecalho from './components/Cabecalho/Cabecalho.js';
import Recursos from './components/Recursos/Recursos.js';
import Acoes from './components/Acoes/Acoes.js';
import React, { useState } from "react";

export default function App() {

  const [estoque, setEstoque] = useState({
    madeira: 0,
    ouro: 0
  });

  const handleClick = (e) => {
    const id = e.target.id;
    console.log(id);
  };

  return (
    <div className="App">
      <Cabecalho />
      <Recursos estoque={estoque} />
      <Acoes handleClick={handleClick} />
    </div>
  );
}
