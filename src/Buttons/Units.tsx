
import { useNavigate } from "react-router-dom";


function Units() {
  const navigate = useNavigate();
  

  const loadNextPage = function() {
    // Lógica para processar a nova unidade, se necessário

    // Navegue aqui para outra página
    navigate("/systemLibrary");
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        
      

        <button onClick={loadNextPage}>Ir para a próxima página</button>
        
      </div>
    </div>
  );
}

export default Units;
