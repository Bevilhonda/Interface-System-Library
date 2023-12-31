import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import SelectUnit from "./SelectUnit";


function Units() {

  const navigate = useNavigate();

  const loadNextPage = function() {
    //  aqui vai lógica para processar a nova unidade, se precisar

    // Navegue aqui para outra página
    navigate("/outraPagina");
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

        <SelectUnit />

        <span style={{ marginRight: 30 }}>
          Inserir Nova Unidade:
        </span>

        <Button
          variant="contained"
          size="small"
          color="info"
          onClick={loadNextPage}
        >
          Nova Unidade
        </Button>

      </div>
    </div>
  );
}

export default Units;
