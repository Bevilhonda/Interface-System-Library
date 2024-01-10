import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useNavigate } from 'react-router-dom';

type LibraryEntity = {
  id_biblioteca: number;
  nome: string;
  rua: string;
  numero: number;
  cidade: string;
  bairro: string;
  estado: string;
}


const GetLibraries = function () {

  const navigate = useNavigate();

  const [libraries, setLibraries] = useState<LibraryEntity[] | null>(null);

  const [selectedLibrary, setSelectedLibrary] = useState<number | null>(null);

  function loadNextPage() {

    
      const selectedLibraryDetails =  libraries?.find(library => library.id_biblioteca === selectedLibrary);
      // Navegar para a próxima página incluindo o ID da biblioteca como parâmetro
      navigate(`/systemLibrary/`,

       { state: { libraryDetails: selectedLibraryDetails } });
    
  }


  const searchListLibraries = async function () {

    try {
      const response = await axios.get(`http://localhost:8080/Libraries`);

      console.log("Response from server:", response.data);

      setLibraries(response.data.libraryList);

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  useEffect(() => {
    searchListLibraries();
  }, []); // Carrega as bibliotecas quando o componente for montado

 

  const LibraryChange = (event: SelectChangeEvent<number>) => {
    setSelectedLibrary(Number(event.target.value));

  };

  if(selectedLibrary !== null){
    loadNextPage();
  }
  

  return (

    <Box sx={{ display: 'flex', maxWidth: "230px", maxHeight: "5px", margin: "auto", alignItems: "center" }}>

      <FormControl fullWidth sx={{ marginRight: '5px' }}>

        <InputLabel id="library-select-label">Selecione uma biblioteca</InputLabel>

        <Select
          labelId="library-select-label"
          id="library-select"
          value={selectedLibrary || ""}
          label="Selecione uma biblioteca"
          onChange={LibraryChange}
          
        >
          {libraries && libraries.map((library) => (
            <MenuItem key={library.id_biblioteca} value={library.id_biblioteca}>
              {library.nome}
            </MenuItem>
          ))}
        </Select>

      </FormControl>

      {selectedLibrary && (

        <div>
          
          {  /* Adicione aqui o código para exibir os detalhes da biblioteca selecionada */}
        </div>

      )}

    </Box>
  );
};

export default GetLibraries;