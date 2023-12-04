import React, { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function Unidades() {
  const [unidade, setUnidade] = useState("");
  const navigate = useNavigate();

  const alteraEstadoUnidade = (event: SelectChangeEvent) => {
    setUnidade(event.target.value as string);
  };

  const alteraProximaPagina = () => {
    //  aqui vai lógica para processar a nova unidade, se precisar

    // Navegue aqui para outra página
    navigate("/outraPagina");
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

        <Box sx={{ minWidth: 250, marginRight: 10 }}>
          <FormControl fullWidth>
            <InputLabel id="IdUnidades">Unidades</InputLabel>
            <Select
              labelId="IdUnidades"
              id="IdUnidades"
              value={unidade}
              label="Unidades"
              onChange={alteraEstadoUnidade}
            >
              <MenuItem value={"Centro"}>Centro</MenuItem>
              <MenuItem value={"Zona sul"}>Zona Sul</MenuItem>
              <MenuItem value={"Zona norte"}>Zona Norte</MenuItem>
            </Select>
          </FormControl>
        </Box>


        <span style={{ marginRight: 30 }}>
          Inserir Nova Unidade:
        </span>

        <Button
          variant="contained"
          size="small"
          color="info"
          onClick={alteraProximaPagina}
        >
          Nova Unidade
        </Button>

      </div>
    </div>
  );
}

export default Unidades;
