import './Acoes.css';

export default function Acoes() {
    return (
        <section className='Acoes'>
            <Acao nome="Cortar madeira" trocas={[{ recurso: "madeira", valor: 1 }]} />
            <Acao nome="Vender madeira" trocas={[{ recurso: "madeira", valor: -1 }, { recurso: "ouro", valor: +1 }]} />
        </section>
    );
}

function Acao(props) {
    const trocas = props.trocas;
    const listaTrocas = [];

    let i = 0;
    for (const troca of trocas) {
        let texto = "";
        const recurso = troca.recurso;
        const valor = troca.valor;

        // Adiciona sinal de + para valores positivos
        if (valor > 0) {
            texto += "+";
        }

        texto += valor + " " + recurso;

        // Adiciona plural conforme necessário
        if (valor !== 1 && valor !== -1) {
            if (recurso === "trabalhador") {
                texto += "e"
            }
            texto += "s"
        }

        // Adiciona elemento à lista
        listaTrocas.push(<p key={i}>{texto}</p>);
        i++;
    }

    return (
        <div className='Acao'>
            <button>{props.nome}</button>
            <div>{listaTrocas}</div>
        </div>
    );
}