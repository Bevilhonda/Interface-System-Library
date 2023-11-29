
import React from "react";
import Unidades from "./Unidades";

function Titulo() {
  
  let nome = "Bibliotecas Maringá"

  return (
    <div>
     
      <div>
        <h1 style={{
          color: "black",
          textAlign: "center",
          padding: "1px",
          fontSize: "60px",
          fontFamily: "sans-serif",
        }}>{nome}</h1>

      </div>

      <Unidades />

    </div>
    
  )
}

export default Titulo