import "./Rodape.css";
import Loja from "../Loja/Loja.js";
import Status from "../Status/Status.js";

export default function Rodape(props) {
  return (
    <footer className="Rodape">
      <Loja
        processos={props.processos}
        upgrades={props.upgrades}
        handleClick={props.handleClick}
      />
      <Status
        estoque={props.estoque}
        transacoes={props.transacoes}
        processos={props.processos}
        vendaAutomatica={props.vendaAutomatica}
        handleChange={props.handleChange}
      />
    </footer>
  );
}
