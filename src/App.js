import './App.css';
import Cabecalho from './components/Cabecalho/Cabecalho.js';
import Recursos from './components/Recursos/Recursos.js';
import Acoes from './components/Acoes/Acoes.js';
import Rodape from './components/Rodape/Rodape.js';
import React, { useState, useEffect } from "react";

export default function App() {

  const [estoque, setEstoque] = useState({
    madeira: 0,
    ouro: 0,
    casa: 0,
    trabalhador: 0,
    comercio: 0
  });

  const [transacoes, setTransacoes] = useState({
    cortar: { madeira: 1 },
    vender: { madeira: -1, ouro: 1 },
    construir: { madeira: -5, ouro: -5, casa: +1 },
    contratarLenhador: { ouro: -10, casa: -1, trabalhador: 1 },
    abrirComercio: { ouro: -150, trabalhador: -3, comercio: 1 },
  });

  // Guarda velocidade dos processos
  const [processos, setProcessos] = useState({
    cortar: 1,
    vender: 1
  });

  function executaTransacao(id, multiplicador = 1) {
    switch (id) {
      case "cortar":
        setEstoque((prevState) => ({ ...prevState, madeira: prevState.madeira + transacoes.cortar.madeira * multiplicador }));
        break;
      case "vender":
        if (estoque.madeira > 0) {
          let quantidade = transacoes.vender.madeira * -1 * multiplicador;
          if (estoque.madeira < quantidade) {
            quantidade = estoque.madeira;
          }
          setEstoque((prevState) => ({ ...prevState, madeira: prevState.madeira - quantidade, ouro: prevState.ouro + quantidade }));
        }
        break;
      case "construir":
        if (estoque.madeira >= transacoes.construir.madeira * -1 && estoque.ouro >= transacoes.construir.ouro * -1) {
          setEstoque((prevState) => ({ ...prevState, madeira: prevState.madeira + transacoes.construir.madeira, ouro: prevState.ouro + transacoes.construir.ouro, casa: prevState.casa + transacoes.construir.casa }));
        }
        break;
      case "contratarLenhador":
        if (estoque.ouro >= transacoes.contratarLenhador.ouro * -1 && estoque.casa >= transacoes.contratarLenhador.casa * -1) {
          setEstoque((prevState) => ({ ...prevState, ouro: prevState.ouro + transacoes.contratarLenhador.ouro, casa: prevState.casa + transacoes.contratarLenhador.casa, trabalhador: prevState.trabalhador + transacoes.contratarLenhador.trabalhador }));
        }
        break;
      case "abrirComercio":
        if (estoque.ouro >= transacoes.abrirComercio.ouro * -1 && estoque.trabalhador >= transacoes.abrirComercio.trabalhador * -1) {
          setEstoque((prevState) => ({ ...prevState, ouro: prevState.ouro + transacoes.abrirComercio.ouro, trabalhador: prevState.trabalhador + transacoes.abrirComercio.trabalhador, comercio: prevState.comercio + transacoes.abrirComercio.comercio }));
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      executaTransacao("cortar", estoque.trabalhador * processos.cortar);
      executaTransacao("vender", estoque.comercio * processos.vender);
    }, 1000);
    return () => clearInterval(intervalo);
  });

  const handleClick = (e) => {
    const id = e.target.id;
    executaTransacao(id.slice(0, -3));
  };

  return (
    <div className="App">
      <Cabecalho />
      <Recursos estoque={estoque} />
      <Acoes transacoes={transacoes} handleClick={handleClick} />
      <Rodape estoque={estoque} transacoes={transacoes} processos={processos} />
    </div>
  );
}