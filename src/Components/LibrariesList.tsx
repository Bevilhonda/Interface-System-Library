import axios from "axios";
import React, { useEffect, useState } from "react";

type LibraryEntity = {
  id_biblioteca:number ;
  nome: string;
  fk_endereco: number;
}


const GetLibrariesByNameCity = function() {
  
  const [libraries ,setLibraries] = useState <LibraryEntity[] | null >(null);

  const searchListLibraries = async function(){

    try {
      const response = await axios.get(`http://localhost:8080/AddressByCity`);
      
      console.log("Response from server:", response.data);

      setLibraries(response.data.libraryList);
    } catch (error){
      console.error('Erro na requisição:', error);
    }
  };

  useEffect(function(){

    searchListLibraries();

  },[]);

  if (libraries === null) {
    return <p>Carregando...</p>;
  }

  if (libraries.length === 0) {
    return <p>Nenhuma biblioteca encontrada para a cidade selecionada.</p>;
  }

  return (
    <div>
      
      <ul>
        {libraries.map((library) => (
          <li key={library.id_biblioteca}>{library.nome}</li>
        ))}
      </ul>
    </div>
  );

};

export default GetLibrariesByNameCity;