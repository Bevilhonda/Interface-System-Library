import React from "react";
import BotaodoMenu from "../Botoes/Botaodeacao";

function MenuOptions({ campos, titulo }) { // essa função tem dois parametros
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
        {campos.map(function (opcaoCampo, index) { 
          // o map percorre cada indice e retorna um novo array e um novo valor para cada indice
          return <BotaodoMenu key={index} label={opcaoCampo} />;
        })}
      </ol>
    </div>
  );
}

export default MenuOptions;
