import { useState, useEffect } from 'react';

function useFetch(url) {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    function buscarDados() {
      setCarregando(true);

      fetch(url)
        .then((resposta) => {
          if (!resposta.ok) {
            throw new Error(`HTTP ${resposta.status}`);
          }
          return resposta.json();
        })
        .then((json) => {
          setDados(json);
          setErro(null);
          setCarregando(false);
        })
        .catch((err) => {
          setErro(err.message);
          setCarregando(false);
        });
    }

    buscarDados();

    const intervalo = setInterval(buscarDados, 30000);

    return () => clearInterval(intervalo);
  }, [url]);

  return { dados, carregando, erro };
}

export default useFetch;