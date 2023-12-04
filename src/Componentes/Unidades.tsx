import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import SelecionarUnidade from "./Caixa de Seleção";


function Unidades() {

  const navigate = useNavigate();

  const alteraProximaPagina = () => {
    //  aqui vai lógica para processar a nova unidade, se precisar

    // Navegue aqui para outra página
    navigate("/outraPagina");
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

        <SelecionarUnidade />

        <span style={{ marginRight: 30 }}>
          Inserir Nova Unidade:
        </span>

        <Button
          variant="contained"
          size="small"
          color="info"
          onClick={alteraProximaPagina}
        >
          Nova Unidade
        </Button>

      </div>
    </div>
  );
}

export default Unidades;
