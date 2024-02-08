import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

export interface LibraryEntity {
  id_biblioteca: number;
  nome: string;
  rua: string;
  numero: number;
  cidade: string;
  bairro: string;
  estado: string;
}

const LibraryDropDown = function (props: {
  selectedLibrary: LibraryEntity | null;
  setSelectedLibrary: (library: LibraryEntity | null) => void;
}) {


  const [libraries, setLibraries] = useState<LibraryEntity[] | null> (null);
  

  const getLibraries = async function () {

    try {
      const response = await axios.get(`http://localhost:8080/Libraries`);

      setLibraries(response.data.libraryList);

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  useEffect(() => {
    getLibraries();
  }, []); // Carrega as bibliotecas quando o componente for montado


  const LibraryChange = (event: SelectChangeEvent<Number>) => {
    const selectedLibraryId = Number(event.target.value);
    
    if (libraries) {
      const selectedLibrary = libraries.find(library => library.id_biblioteca === selectedLibraryId);
      
      if (selectedLibrary) {
        props.setSelectedLibrary(selectedLibrary);
      }
    }
  };

  return (
    <Box>

      <Box sx={{
        display: 'flex',
        maxWidth: "230px",
        maxHeight: "5px",
        margin: "auto",
        alignItems: "center"
      }}>

        <FormControl fullWidth sx={{ marginRight: '5px' }}>

          <InputLabel id="library-select-label">Selecione uma biblioteca</InputLabel>
          
          <Select
            labelId="library-select-label"
            id="library-select"
            value={props.selectedLibrary?.id_biblioteca || ""}
            label="Selecione uma biblioteca"
            onChange={LibraryChange}

          >
            {libraries && libraries.map((library) => (

              <MenuItem key={library.id_biblioteca} value={library.id_biblioteca}>
                {`${library.nome} ${library.id_biblioteca} `}
                
              </MenuItem>

            ))}
          </Select>

        </FormControl>

      </Box>

    </Box>
  );
};

export default LibraryDropDown;