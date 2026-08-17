import useFetch from './useFetch';

function PainelCep() {
  const url = 'https://viacep.com.br/ws/01001000/json/';

  const { dados, carregando, erro } = useFetch(url);

  if (carregando) return <p>Carregando endereço...</p>;
  if (erro) return <p>Erro: {erro}</p>;

  return (
    <div className="card">
      <h2>Dados do CEP</h2>
      <p>Cidade: {dados.localidade}</p>
      <p>Estado: {dados.uf}</p>
      <p>Bairro: {dados.bairro}</p>
    </div>
  );
}

export default PainelCep;