import React, { useEffect, useState } from 'react';
import axios from 'axios';

type LibraryEntity = {
  idLibrary: number;
  name: string;
  address: number;
};

const GetAllLibrarys = function () {
  const [libraries, setLibraries] = useState<LibraryEntity[] | null>(null);

  useEffect(function () {


    const searchDataLibrarys = async function () {


      try {

        const response = await axios.get('http://localhost:8080/Librarys');

        console.log(response.data);

        setLibraries(response.data.libraryList);

      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    searchDataLibrarys();
  }, []);

  return (
    <div style={{
      width: 900,
      padding: 10,
      height: '530px',
      marginTop: '-440px',
      marginLeft: '550px'
    }}>

      {libraries ? (
        <ul>
          {libraries.map((library: LibraryEntity) => (

            <li style={{ color: "greenyellow" }}
              key={library.idLibrary?.toString()}>

              {library.name} - {library.address}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "greenyellow" }}>Carregando bibliotecas...</p>
      )}
    </div>
  );
};

export default GetAllLibrarys;
