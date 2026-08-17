import { useState, useEffect } from 'react';
import SensorCard from './SensorCard';

function App() {
  const [sensores, setSensores] = useState([
    { id: 1, nome: 'Temperatura', valor: 24.5, unidade: '°C' },
    { id: 2, nome: 'Umidade', valor: 60, unidade: '%' },
    { id: 3, nome: 'Luminosidade', valor: 300, unidade: 'lux' },
  ]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const novoValor = (20 + Math.random() * 10).toFixed(1);
      setTemperatura(novoValor);
    }, 2000);

    return () => clearInterval(intervalo); // limpeza ao desmontar o componente
  }, []); // [] = executa só uma vez, quando o componente monta

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      {sensores.map((s) => (
        <SensorCard
          key={s.id}
          nome={s.nome}
          valor={s.valor}
          unidade={s.unidade}
        />
      ))}
    </div>
  );
}

export default App;
