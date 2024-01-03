import React, { useEffect, useState } from 'react';
import axios from 'axios';

type DTOLibraries = {
  idLibrary: number;
  nome: string;
  fk_endereco: number;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
};


const GetLibrariesAndAddress = function () {
  const [libraries, setLibraries] = useState<DTOLibraries[] | null>(null);

  const searchDataLibrarys = async function () {


    try {

      const response = await axios.get('http://localhost:8080/FullLibraries');

      //console.log(response.data);
      //console.log(response.data.listAddress);

      setLibraries(response.data.listAddress);

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };


  useEffect(function () {

    searchDataLibrarys();

  }, []);

  return (
    <div style={{

      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: 900,
      padding: 10,
      marginTop: '-330px',
      marginLeft: '300px',
    }}>

      {libraries ? (
        libraries.map((library: DTOLibraries) => (
          <div key={library.idLibrary?.toString()} style={{
            color: 'greenyellow',
            backgroundColor: "black",
            padding: '5px',
            border: '2px solid #ddd',
            borderRadius: '15px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            width: '150px',
            height: "150px",
            marginBottom: '15px',
            marginRight: '-20px'


          }}>
            
            <h3 style={{ fontSize: '15px' }}>{library.nome}</h3>
            <ul style={{ fontSize: "10px" }}>
              <li>Rua: {library.rua}</li>
              <li>Numero: {library.numero}</li>
              <li>Bairro: {library.bairro}</li>
              <li>Cidade: {library.cidade}</li>
              <li>Estado: {library.estado}</li>
            </ul>
          </div>
        ))
      ) : (
        <p style={{ color: 'greenyellow', fontSize: '18px' }}>Carregando bibliotecas...</p>
      )}
    </div>
  );
};

export default GetLibrariesAndAddress;
