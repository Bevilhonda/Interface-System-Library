import { Button } from "@mui/material";
import React from "react";

type ActionButton = {
  onButtonClick?: () => void;
};

function UpdateButton(props: ActionButton) {

  return (

    <Button style={{
      fontSize: '12px',
      padding: '2px 60px',
      backgroundColor: "steelblue",
      listStyleType: "initial",
      color: "greenyellow",
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
    }}
      onClick={props.onButtonClick}

    >
      Atualizar
    </Button>
  )

}
export default UpdateButton