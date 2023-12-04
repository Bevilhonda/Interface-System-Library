import React from "react";
import Paper from '@mui/material/Paper';
import MenuOptions from "../Menu/MenuOpçoes";

function Page2() {
  let nome = "Bibliotecas Maringá"

  return (
    <div>
      <div>
      <h1 style={{
          color: "black",
          textAlign: "center",
          padding: "0px",
          fontSize: "60px",
          fontFamily: "sans-serif",
        }}>{nome}</h1>

      </div>

      <Paper style={{
        width: 210,
        backgroundColor: 'black',
        padding: 10,
        boxSizing: 'border-box',
        height: '530px',
        marginTop: '-20px'
      }}>
        
          <MenuOptions
            titulo="Biblioteca"
            campos={["Consultar", "Cadastrar", "Atualizar"]}
          />

          <MenuOptions
            titulo="Autores"
            campos={["Consultar", "Cadastrar", "Atualizar"]}
          />

          <MenuOptions
            titulo="Livros"
            campos={["Consultar", "Cadastrar", "Atualizar"]}
          />

      </Paper>
      
    </div>
  )
}
export default Page2