import { Box } from "@mui/material";
import React, { useState } from "react";
import ConsultButton from "../Botoes/BotãoConsultar";
import RegisterButton from "../Botoes/BotãoCadastrar";
import UpdateButton from "../Botoes/BotãoAtualizar";
import GetAllLibrarys from "../Componentes/ListaBibliotecas";


const MenuOptions: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<React.ReactNode | null>(null);

  const handleConsultClick = (component: React.ReactNode) => {
    setActiveComponent(component);
  };
  return (
    <div>
      <Box style={{
        padding: 10,
        boxSizing: "border-box",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h2 style={{ color: "greenyellow", textAlign: "center", marginTop: "-12px" }}>Bibliotecas</h2>
        <div style={{ marginTop: "-10px", display: "flex", flexDirection: "column", gap: "5px" }}>
          <ConsultButton onButtonClick={() => handleConsultClick(<GetAllLibrarys />)} />
          <RegisterButton />
          <UpdateButton />
        </div>

      </Box>

      <Box style={{
        padding: 10,
        boxSizing: "border-box",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h2 style={{ color: "greenyellow", textAlign: "center", marginTop: "-12px" }}>Autores</h2>
        <div style={{ marginTop: "-10px", display: "flex", flexDirection: "column", gap: "5px" }}>
          <ConsultButton />
          <RegisterButton />
          <UpdateButton />
        </div>

      </Box>

      <Box style={{
        boxSizing: "border-box",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <h2 style={{ color: "greenyellow", textAlign: "center", marginTop: "-12px" }}>Livros</h2>
        <div style={{ marginTop: "-10px", display: "flex", flexDirection: "column", gap: "5px" }}>
          <ConsultButton />
          <RegisterButton />
          <UpdateButton />
        </div>

      </Box>
      {activeComponent}
    </div>

  )
}

export default MenuOptions;
