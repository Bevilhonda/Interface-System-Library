
import axios from "axios";
import React, { useEffect, useState } from "react";


export type AuthorEntity = {
  id: number;
  name: {
    name: string;
    lastName: string;
  };
  data_nascimento: string;
};

interface GetAllAlthorsProps {
  sendListAuthors: (authors: AuthorEntity[] | null) => void;
}

const GetAllAlthors: React.FC<GetAllAlthorsProps> = function ({ sendListAuthors }) {

  const [authors, setAuthors] = useState<AuthorEntity[] | null>(null);


  const searchDataAuthors = async function () {

    try {
      const response = await axios.get('http://localhost:8080/Authors');

      if (response.data && response.data.responseList) {

        setAuthors(response.data.responseList);
        sendListAuthors(response.data.responseList);

      } else {
        console.error('Resposta da requisição inválida:', response);

      }
    } catch (error) {

      console.error('Erro na requisição:', error);

    }
  };


  useEffect(function () {

    searchDataAuthors();

  }, []);


  return (

    <div >
      {authors ? (
        authors.map((author: AuthorEntity) => (

          <div key={author.id}>
            
          </div>
        ))
      ) : (
        <p style={{ color: 'greenyellow', fontSize: '18px' }}>Carregando Autores...</p>
      )}


    </div>

  );
};
export default GetAllAlthors;