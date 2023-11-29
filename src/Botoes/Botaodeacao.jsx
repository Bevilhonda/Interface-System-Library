import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const BotaoModificado = styled(Button)({
  fontSize: '12px',
  padding: '5px 60px',
  backgroundColor: "steelblue", 
  listStyleType: "initial",
  color: "greenyellow",
  display: "flex",
  flexDirection: "column",
  
  
});

const BotaodoMenu = ({ label }) => {
  return (

  <BotaoModificado>{label}</BotaoModificado>
  
  )
};

export default BotaodoMenu;
