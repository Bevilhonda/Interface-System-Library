import { Box } from "@mui/material";
import React, { useState } from "react";
import ConsultButton from "../Buttons/ConsultButton";
import RegisterButton from "../Buttons/RegisterButton";
import UpdateButton from "../Buttons/UpdateButton";
import GetAllLibraries from "../Components/GetAllLibraries";
import GetAuthorsInLibrary from "../Components/GetAuthorsInLibrary";
import GetBooksInLibrary from "../Components/GetAllBooksInLibrary";
import InputFormBook from "../Components/InputFormBook";
import InputFormAuthor from "../Components/InputFormAuthor";
import InputFormLibrary from "../Components/InputFormLibrary";


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

          <ConsultButton onButtonClick={() =>
            handleConsultClick(<GetAllLibraries />)} />

          <RegisterButton onButtonClick={() => 
            handleConsultClick(<InputFormLibrary />)} />

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

          <ConsultButton onButtonClick={() =>
            handleConsultClick(<GetAuthorsInLibrary />)} />

          <RegisterButton onButtonClick={() =>
            handleConsultClick(<InputFormAuthor />)} />

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

          <ConsultButton onButtonClick={() =>
            handleConsultClick(<GetBooksInLibrary />)} />

          <RegisterButton onButtonClick={() =>
            handleConsultClick(<InputFormBook />)} />

          <UpdateButton />
        </div>

      </Box>
      {activeComponent}
    </div>

  )
}

export default MenuOptions;
