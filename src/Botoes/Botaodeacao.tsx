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

type BotaodoMenuProps = {
  label: string; 
};

const BotaodoMenu = (props : BotaodoMenuProps) => {
  return <BotaoModificado>{props.label}</BotaoModificado>;
};

export default BotaodoMenu;
