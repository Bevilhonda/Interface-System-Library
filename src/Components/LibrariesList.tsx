import React, { useEffect, useState } from 'react';
import axios from 'axios';

type DTOLibraries = {
  idLibrary: number;
  name: string;
  fk_endereco: number;
  idAddress: number;
  street: string;
  number: number;
  neighborhoods: string;
  city: string;
  state: string;
};


const GetAllLibrarys = function () {
  const [libraries, setLibraries] = useState<DTOLibraries[] | null>(null);

  useEffect(function () {


    const searchDataLibrarys = async function () {


      try {

        const response = await axios.get('http://localhost:8080/FullLibraries');

        console.log(response.data);
        console.log(response.data.listAddress);

        setLibraries(response.data.listAddress);

      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    searchDataLibrarys();
  }, []);

  return (
    <div style={{

      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: 900,
      padding: 10,
      marginTop: '-430px',
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
            <h3 style={{ fontSize: '15px' }}>{library.name}</h3>
            <ul style={{ fontSize: "10px" }}>
              <li>Rua: {library.street}</li>
              <li>Numero: {library.number}</li>
              <li>Bairro: {library.neighborhoods}</li>
              <li>Cidade: {library.city}</li>
              <li>Estado: {library.state}</li>
            </ul>
          </div>
        ))
      ) : (
        <p style={{ color: 'greenyellow', fontSize: '18px' }}>Carregando bibliotecas...</p>
      )}
    </div>
  );
};

export default GetAllLibrarys;
