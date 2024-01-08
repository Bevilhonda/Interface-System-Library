import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';




function SelectUnit() {

  const [unidade, setUnidade] = useState("");
  const navigate = useNavigate();

  const changeState = (event: SelectChangeEvent<string>) => {
    setUnidade(event.target.value);

  };

  
  function loadNextPage() {
    // Lógica para processar a nova unidade, se necessário

    // Navegue aqui para outra página
    navigate("/systemLibrary");
  }

  return (

    <Box sx={{ display: 'flex', maxWidth: "230px",maxHeight:"5px", margin: "auto", alignItems: "center" }}>


      <FormControl fullWidth sx={{ marginRight: '5px' }}>

        <InputLabel id="IdUnidades">Bibliotecas</InputLabel>

        <Select
          labelId="IdUnidades"
          id="IdUnidades"
          value={unidade}
          label="Unidades"
          onChange={changeState}
        >
          
        </Select>

      </FormControl>
      
    </Box>
  );
};

export default SelectUnit;