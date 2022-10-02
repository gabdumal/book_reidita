import './Recursos.css';

export default function Recursos() {
    return (
        <section className='Recursos'>
            <Recurso nome="Madeira" imagem="🌲" valor="0" />
            <Recurso nome="Ouro" imagem="💰" valor="0" />
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