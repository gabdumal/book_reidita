import './Loja.css';

export default function Loja(props) {
    const upgrades = props.upgrades;
    const processos = props.processos;
    return (
        <section className='Loja'>
            <h1>Loja</h1>
            <div className='lista-upgrades'>
                <Upgrade id="lenhadoresBtn" custo={upgrades.lenhadores} texto="Melhora velocidade dos lenhadores" velocidade={processos.cortar} handleClick={props.handleClick} />
                <Upgrade id="comerciosBtn" custo={upgrades.comercios} texto="Melhora velocidade dos comércios" velocidade={processos.vender} handleClick={props.handleClick} />
            </div>
        </section>
    );
}

function Upgrade(props) {
    return (
        <button id={props.id} className='upgrade' onClick={props.handleClick}>
            <p>{props.custo}o</p>
            <p>{props.texto}</p>
            <p>{props.velocidade}x -{'>'} {props.velocidade + 1}x</p>
        </button>
    );
}