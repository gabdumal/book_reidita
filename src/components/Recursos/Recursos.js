import './Recursos.css';

export default function Recursos(props) {
    const estoque = props.estoque;
    return (
        <section className='Recursos'>
            <Recurso nome="Madeira" imagem="🌲" valor={estoque.madeira} />
            <Recurso nome="Ouro" imagem="💰" valor={estoque.ouro} />
        </section>
    );
}

function Recurso(props) {
    return (
        <div className='Recurso'>
            <h1>{props.nome}</h1>
            <span>{props.imagem}</span>
            <p>{props.valor}</p>
        </div>
    );
}