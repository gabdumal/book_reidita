import "./Acoes.css";

export default function Acoes(props) {
  const transacoes = props.transacoes;
  return (
    <section className="Acoes">
      <Acao
        id="cortarBtn"
        nome="Cortar madeira"
        trocas={transacoes.cortar}
        handleClick={props.handleClick}
      />
      <Acao
        id="venderBtn"
        nome="Vender madeira"
        trocas={transacoes.vender}
        handleClick={props.handleClick}
      />
      <Acao
        id="construirBtn"
        nome="Construir casa"
        trocas={transacoes.construir}
        handleClick={props.handleClick}
      />
      <Acao
        id="contratarLenhadorBtn"
        nome="Contratar lenhador"
        trocas={transacoes.contratarLenhador}
        handleClick={props.handleClick}
      />
      <Acao
        id="abrirComercioBtn"
        nome="Abrir comércio"
        trocas={transacoes.abrirComercio}
        handleClick={props.handleClick}
      />
    </section>
  );
}

function Acao(props) {
  const trocas = props.trocas;
  const paresTrocas = Object.entries(trocas);
  const listaTrocas = [];

  let i = 0;
  for (const troca of paresTrocas) {
    let texto = "";
    const recurso = troca[0];
    const valor = troca[1];

    // Adiciona sinal de + para valores positivos
    if (valor > 0) {
      texto += "+";
    }

    texto += valor + " ";
    texto += recurso === "comercio" ? "comércio" : recurso;

    // Adiciona plural conforme necessário
    if (valor !== 1 && valor !== -1) {
      if (recurso === "trabalhador") {
        texto += "e";
      }
      texto += "s";
    }

    // Adiciona elemento à lista
    listaTrocas.push(<p key={i}>{texto}</p>);
    i++;
  }

  return (
    <div className="Acao">
      <button id={props.id} onClick={props.handleClick}>
        {props.nome}
      </button>
      <div>{listaTrocas}</div>
    </div>
  );
}
