import './App.css';
import PainelClima from './PainelClima';
import PainelCep from './PainelCep';

function App() {
  return (
    <div className="container">
      <h1>Painel de Dados Externos</h1>

      <div className="cards">
        <PainelClima />
        <PainelCep />
      </div>
    </div>
  );
}

export default App;