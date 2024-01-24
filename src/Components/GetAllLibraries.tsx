import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

type LibraryEntity = {
  idLibrary: number;
  nome: string;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
};


const GetAllLibraries = function () {
  
  const [libraries, setLibraries] = useState<LibraryEntity[] | null>(null);

  const searchDataLibrarys = async function () {


    try {

      const response = await axios.get('http://localhost:8080/Libraries');

      setLibraries(response.data.libraryList);

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
      marginTop: '-550px',
      marginLeft: '250px',
    }}>

      {libraries ? (
        libraries.map((library: LibraryEntity) => (
          <Button key={library.idLibrary?.toString()}>
          <div style={{
            color: 'greenyellow',
            backgroundColor: "black",
            padding: '5px',
            border: '2px solid #ddd',
            borderRadius: '15px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            width: '155px',
            height: "60px",
            marginBottom: '15px',
            marginRight: '-20px'
          }}>

              <h6 style={{fontSize:'11px',marginTop:'2px' }}>{library.nome}</h6>

            </div>
          </Button>
        ))
      ) : (
        <p style={{ color: 'greenyellow', fontSize: '18px' }}>Carregando bibliotecas...</p>
      )}
    </div>

  );
};

export default GetAllLibraries;
