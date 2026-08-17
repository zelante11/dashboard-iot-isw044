import useFetch from './useFetch';

function PainelClima() {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=-22.97&longitude=-49.87&current=temperature_2m,relative_humidity_2m,wind_speed_10m';

  const { dados, carregando, erro } = useFetch(url);

  if (carregando) return <p>Carregando dados climáticos...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div className="card">
      <h2>Estação Climática</h2>
      <p>🌡️ {dados.current.temperature_2m} °C</p>
      <p>💧 {dados.current.relative_humidity_2m}%</p>
      <p>🌬️ {dados.current.wind_speed_10m} km/h</p>
    </div>
  );
}

export default PainelClima;