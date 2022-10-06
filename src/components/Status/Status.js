import './Status.css';

export default function Status(props) {
    const estoque = props.estoque;
    const transacoes = props.transacoes;
    const processos = props.processos;
    const vendaAutomatica = props.vendaAutomatica;
    return (
        <section className='Status'>
            <h1>Status</h1>
            <div>
                <p>Cortando <span>{estoque.trabalhador * transacoes.cortar.madeira * processos.cortar}</span> madeiras/seg</p>
                <p>Lucrando <span>{vendaAutomatica ? estoque.comercio * transacoes.vender.ouro * processos.vender : 0}</span> ouros/seg</p>
            </div>
            <div>
                <input type="checkbox" id="vendaAuto" name="vendaAuto" value={vendaAutomatica} onChange={props.handleChange} />
                <label htmlFor="vendaAuto" className="caixa-selecao">Venda automática</label>
            </div>
        </section>
    );
}