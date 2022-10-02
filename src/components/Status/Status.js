import './Status.css';

export default function Status(props) {
    return (
        <section className='Status'>
            <h1>Status</h1>
            <div>
                <p>Cortando <span>0</span> madeiras/seg</p>
                <p>Lucrando <span>0</span> ouros/seg</p>
            </div>
            <div>
                <input type="checkbox" id="vendaAuto" name="vendaAuto" />
                <label htmlFor="vendaAuto" className="caixa-selecao">Venda automática</label>
            </div>
        </section>
    );
}