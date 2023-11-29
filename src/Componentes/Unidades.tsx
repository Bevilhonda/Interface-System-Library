import React, { useState } from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useNavigate } from "react-router-dom";


function Unidades() {
  const [unidade, setUnidade] = useState("");
  const navigate = useNavigate();
  const handleNovaUnidade = () => {
    //  aqui vai lógica para processar a nova unidade, se precisar

    // Navegue aqui para outra página
    navigate("/outraPagina");
  };
  
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

      <Input
        style={{ marginRight: 60, textAlign: "center" }}
        placeholder="Escolha uma unidade"
        value={unidade}
        onChange={(e) => setUnidade(e.target.value)}/>
      
      
      <span style={{ marginRight: 30 }}>
        Inserir Nova Unidade:
      </span>

      <Button 
      variant="contained" 
      size="small" 
      color="info"
      onClick={handleNovaUnidade}
      >
        Nova Unidade
      </Button>

    </div>
  );
}

export default Unidades;
