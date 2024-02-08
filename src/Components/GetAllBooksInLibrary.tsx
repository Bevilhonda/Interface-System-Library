import axios from "axios";
import React, { useEffect, useState } from "react";
import {LibraryEntity} from '../Components/LibraryDropDown';

type Book = {
  title: string;
  data_publication: number;
  edicao: number;
};

type ListBooksResponse = {
  list: Book[];
}

const GetBooksInLibrary = function (props: { selectedLibrary: LibraryEntity | null }) {

  const idLibrary = props.selectedLibrary?.id_biblioteca;

  const [listBooks, setListBooks] = useState<Book[] | null>(null);

  useEffect(() => {

    const searchBooksInTheLibrary = async function () {
      try {

        const response = await axios.get<ListBooksResponse>(
          `http://localhost:8080/SearchBooks/${idLibrary}`);

        setListBooks(response.data.list)

      }
      catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    if (idLibrary !== null && idLibrary !== undefined) {
      searchBooksInTheLibrary();
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
      {listBooks ? (
        listBooks.map((book: Book, index) => (
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

                <strong>Nome:</strong> {book.title}
              </div>

              <div>
                <strong>Data de Publicação:</strong> {book.data_publication}
              </div>

              <div>
                <strong>Edição:</strong> {book.edicao}
              </div>

            </div>
          </div>

        ))
      ) : (
        <p style={{
          color: 'greenyellow',
          fontSize: '18px',


        }}>Carregando Livros...</p>
      )}


    </div>
  );
}
export default GetBooksInLibrary;