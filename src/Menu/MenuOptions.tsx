import React from "react";
import BotaodoMenu from "../Botoes/Botaodeacao";

type MenuOptionsProps = {
  campos: string[]
  titulo: string
}


function MenuOptions(props: MenuOptionsProps) {

  return (
    <div>
      <h2 style={{ marginBottom: "15px", color: "yellowgreen", height: '8px' }}>
        {props.titulo}
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
        {props.campos.map(function (valorAtual, index) {

          return <BotaodoMenu key={index} label={valorAtual} />;
        })}
      </ol>
    </div>
  );
}

export default MenuOptions;
