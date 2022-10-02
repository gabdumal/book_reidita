import './App.css';
import Cabecalho from './components/Cabecalho/Cabecalho.js';
import Recursos from './components/Recursos/Recursos.js';
import Acoes from './components/Acoes/Acoes.js';

export default function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Recursos />
      <Acoes />
    </div>
  );
}
