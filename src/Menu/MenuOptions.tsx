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
import {LibraryEntity} from '../Components/LibraryDropDown';
import InputUpdateAuthor from "../Components/InputUpdateAuthor";
import InputUpdateLibrary from "../Components/InputUpdateLibrary";

interface MenuOptionsProps {
  selectedLibrary: LibraryEntity | null;
}


const MenuOptions: React.FC<MenuOptionsProps> = (props: { selectedLibrary: LibraryEntity | null }) => {
  
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

          <UpdateButton onButtonClick={()=>
          handleConsultClick(<InputUpdateLibrary selectedLibrary={props.selectedLibrary}/>)}/>
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
          
            handleConsultClick(<GetAuthorsInLibrary selectedLibrary={props.selectedLibrary} /> )} />

          <RegisterButton onButtonClick={() =>
            handleConsultClick(<InputFormAuthor />)} />

          <UpdateButton onButtonClick={()=> handleConsultClick(<InputUpdateAuthor />)}/>
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
            handleConsultClick(<GetBooksInLibrary selectedLibrary={props.selectedLibrary} />)} />

          <RegisterButton onButtonClick={() =>
            handleConsultClick(<InputFormBook selectedLibrary={props.selectedLibrary}/>)} />

          <UpdateButton />
        </div>

      </Box>
      {activeComponent}
    </div>

  )
}

export default MenuOptions;
