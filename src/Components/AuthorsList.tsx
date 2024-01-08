
import axios from "axios";
import React, { useEffect, useState } from "react";

type AuthorEntity = {
  id_autor: number;
  name: {
    name: string;
    lastName: string;
  };
  data_nascimento: string;
};

const GetAllAlthors = function () {

  const [authors, setAthors] = useState<AuthorEntity[] | null> (null);

  
  const searchDataAuthors = async function () {

    try {
      const response = await axios.get('http://localhost:8080/Authors');

      console.log(response.data);

      setAthors(response.data.responseList);

    }
    catch (error) {
      console.error('Erro na requisição:', error);
    }
  };


  useEffect(function () {

    searchDataAuthors();

  }, []);


  return (

    <div style={{

      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: 900,
      padding: 10,
      marginTop: '-470px',
      marginLeft: '300px',
    }}>
      {authors ? (
        authors.map((author: AuthorEntity) => (
          
          <div key={author.id_autor?.toString()}
            style={{
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
            <h3 style={{ fontSize: '15px' }}>{`${author.name.name} ${author.name.lastName}`} </h3>
            <ul style={{fontSize:"10px"}}>
            <li>Nome: {`${author.name.name} ${author.name.lastName}`} </li>
            <li>Data de Nascimento: {new Date(author.data_nascimento).toLocaleDateString()}</li>
            </ul>

          </div>
        ))
      ) : (
        <p style={{ color: 'greenyellow', fontSize: '18px' }}>Carregando Autores...</p>
      )}
    </div>

  );
};
export default GetAllAlthors;