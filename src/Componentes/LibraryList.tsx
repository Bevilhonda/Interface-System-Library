import React, { useEffect, useState } from 'react';
import axios from 'axios';

type CompleteAddress = {
  street: string;
  number: number;
  idAddress: number;
  boroughs: string;
  city: string;
  state: string;
};

type DataLibrarys = {
  idLibrary: number;
  name: string;
  address: number;
  completeAddress: CompleteAddress;
};

const GetAllLibrarys = function () {
  const [libraries, setLibraries] = useState<DataLibrarys[] | null>(null);

  useEffect(function () {


    const searchDataLibrarys = async function () {


      try {

        const response = await axios.get('http://localhost:8080/FullLibrarys');

        console.log(response.data);

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
        libraries.map((library: DataLibrarys) => (
          <div key={library.idLibrary?.toString()} style={{
            color: 'greenyellow',
            backgroundColor:"black",
            padding: '5px',
            border: '2px solid #ddd',
            borderRadius: '15px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            width: '150px', 
            height:"150px",
            marginBottom: '5px',
            marginRight: '-20px'
            
            
          }}>
            <h3 style={{ fontSize: '15px' }}>{library.name}</h3>
            <ul style={{fontSize:"10px"}}>
              <li>Rua: {library.completeAddress.street}</li>
              <li>Numero: {library.completeAddress.number}</li>
              <li>Bairro: {library.completeAddress.boroughs}</li>
              <li>Cidade: {library.completeAddress.city}</li>
              <li>Estado: {library.completeAddress.state}</li>
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
