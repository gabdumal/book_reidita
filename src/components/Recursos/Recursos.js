import './Recursos.css';

export default function Recursos() {
    return (
        <section className='Recursos'>
            <Recurso />
        </section>
    );
}

function Recurso() {
    return (
        <div className='Recurso'>
            <h1>Madeira</h1>
            <span>🌲</span>
            <p>10000</p>
        </div>
    );
}