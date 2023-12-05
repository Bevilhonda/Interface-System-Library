import React, { useEffect, useState } from 'react';
import axios from 'axios';

type LibraryEntity = {
  id_biblioteca: number;
  nome: string;
  fk_endereco: number;
};


const ExemploComponente = () => {
  const [libraries, setLibraries] = useState<LibraryEntity[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/Librarys');
        setLibraries(response.data); // Assumindo que a resposta contém os dados necessários
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData();
  }, []); // O segundo parâmetro [] garante que o efeito só ocorra uma vez (equivalente ao componentDidMount)

  return (
    <div>
    <h1>Lista de Bibliotecas:</h1>
    {libraries ? (
      <ul>
        {libraries.map((library: LibraryEntity) => (
          <li key={library.id_biblioteca}>{library.nome}</li>
        ))}
      </ul>
    ) : (
      <p>Carregando bibliotecas...</p>
    )}
  </div>
  );
};

export default ExemploComponente;
