import axios from "axios";
import React,{useEffect,useState} from "react";

type ListAuthor = {
  authors: {
    nome:string ,
    sobrenome : string 
  }
  
   
}

const GetAuthorsInLibrary = function(){

  const [listAuthors , setListAuthors] = useState <ListAuthor[] | null > (null);

  const searchAuthorInTheLibrary = async function(){
     try {
      const response = await axios.get('http://localhost:8080/SearchAuthors/{id}');

      setListAuthors (response.data.authors)
     }
     catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  useEffect( ()=>{
    searchAuthorInTheLibrary();

  },[]);

  return (
    <div>
      {listAuthors ? (
        listAuthors.map((author : ListAuthor) => (
          <div key={author.authors?.toString()}> 
          <h3>
            {`${author.authors.nome} ${author.authors.sobrenome}`}
            
          </h3>
      
          </div>

        ))
        ) : (
          <p style={{ color: 'greenyellow', fontSize: '18px' }}>Carregando Autores...</p>
        )}
      
    </div>
  );
}
export default GetAuthorsInLibrary;