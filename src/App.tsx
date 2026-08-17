import { useState, useEffect } from 'react';
import SensorCard from './SensorCard';
import './App.css';

function App() {
  const [sensores, setSensores] = useState([
    { id: 1, nome: 'Temperatura', valor: 24.5, unidade: '°C' },
    { id: 2, nome: 'Umidade', valor: 60, unidade: '%' },
    { id: 3, nome: 'Luminosidade', valor: 300, unidade: 'lux' },
    { id: 4, nome: 'CO₂', valor: 450, unidade: 'ppm' },
  ]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSensores([
        {
          id: 1,
          nome: 'Temperatura',
          valor: (20 + Math.random() * 10).toFixed(1),
          unidade: '°C',
        },
        {
          id: 2,
          nome: 'Umidade',
          valor: (40 + Math.random() * 40).toFixed(0),
          unidade: '%',
        },
        {
          id: 3,
          nome: 'Luminosidade',
          valor: (200 + Math.random() * 400).toFixed(0),
          unidade: 'lux',
        },
        {
          id: 4,
          nome: 'CO₂',
          valor: (400 + Math.random() * 300).toFixed(0),
          unidade: 'ppm',
        },
      ]);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container">
      <h1>Central de Sensores</h1>

      <div className="cards">
        {sensores.map((sensor) => (
          <SensorCard
            key={sensor.id}
            nome={sensor.nome}
            valor={sensor.valor}
            unidade={sensor.unidade}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
