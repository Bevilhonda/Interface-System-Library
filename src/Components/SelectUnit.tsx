import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from "react";


export default function SelectUnit() {
  const [unidade, setUnidade] = useState("");

  const changeState = (event: SelectChangeEvent) => {
    setUnidade(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 250, marginRight: 10 }}>
      <FormControl fullWidth>

        <InputLabel id="IdUnidades">Unidades</InputLabel>

        <Select
          labelId="IdUnidades"
          id="IdUnidades"
          value={unidade}
          label="Unidades"
          onChange={changeState}
        >
          <MenuItem value={"Todas"}>Todas Unidades </MenuItem>

          <MenuItem value={"Centro"}>Centro</MenuItem>

          <MenuItem value={"Zona sul"}>Zona Sul</MenuItem>

          <MenuItem value={"Zona norte"}>Zona Norte</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
  );
}