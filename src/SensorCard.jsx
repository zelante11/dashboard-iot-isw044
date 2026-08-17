function SensorCard({ nome, valor, unidade }) {
  return (
    <div className="card">
      <h3>{nome}</h3>
      <p>
        {valor} {unidade}
      </p>
    </div>
  );
}

export default SensorCard;