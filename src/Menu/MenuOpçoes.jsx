import React from "react";
import BotaodoMenu from "../Botoes/Botaodeacao";

function MenuOptions({ campos , titulo }) { 
  return (
    <div>
      <h2 style={{ marginBottom: "15px", color: "yellowgreen", height: '8px' }}>
        {titulo} 
      </h2>
      <ol
        style={{
          padding: 10,
          color: "greenyellow",
          display: "flex",
          flexDirection: "column",
          gap: 5,
        }}
      >
        {campos.map(function (valorAtual, index) { 
         
          return <BotaodoMenu key={index} label={valorAtual} />;
        })}
      </ol>
    </div>
  );
}

export default MenuOptions;
