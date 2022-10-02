import './Acoes.css';

export default function Acoes() {
    return (
        <section className='Acoes'>
            <Acao nome="Cortar madeira" trocas={[{ recurso: "madeira", valor: 1 }]} />
        </section>
    );
}

function Acao(props) {
    return (
        <div className='Acao'>
            <button>{props.nome}</button>
            <p>{props.valores[0].valor + " " + props.valores[0].recurso}</p>
        </div>
    );
}