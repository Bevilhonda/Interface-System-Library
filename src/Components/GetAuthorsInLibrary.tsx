import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type Author = {
  nome: string;
  sobrenome: string;
};

type ListAuthorResponse = {
  authors: Author[];
};


const GetAuthorsInLibrary = function () {

  const location = useLocation();

  const getIdLibrary = location.state?.libraryDetails || null;

  const idLibrary = getIdLibrary.id_biblioteca;

  const [listAuthors, setListAuthors] = useState<Author[] | null>(null);

  useEffect(() => {

    const searchAuthorInTheLibrary = async function () {
      try {

        const response = await axios.get<ListAuthorResponse>(`http://localhost:8080/SearchAuthors/${idLibrary}`);

        setListAuthors(response.data.authors)

      }
      catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    if (idLibrary !== null && idLibrary !== undefined) {
      searchAuthorInTheLibrary();
    }

  }, [idLibrary]);

   
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
      {listAuthors ? (
        listAuthors.map((author: Author, index) => (
          <div key={index} style={{
            color: 'greenyellow',
            backgroundColor: "black",
            padding: '8px',
            border: '2px solid #ddd',
            borderRadius: '15px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            width: '175px',
            height: "110px",
            marginBottom: '15px',
            marginRight: '300px'

          }}>
            <div style={{ fontSize: '13px' }}>

              <div style={{ marginTop: '2px' }}>
                <strong>Nome:</strong> {author.nome}
              </div>

              <div>
                <strong>Sobrenome:</strong> {author.sobrenome}
              </div>

            </div>

          </div>

        ))
      ) : (
        <p style={{
          color: 'greenyellow',
          fontSize: '18px',


        }}>Carregando Autores...</p>
      )}

    </div>
  );
}
export default GetAuthorsInLibrary;