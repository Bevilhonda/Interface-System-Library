import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import MenuOptions from '../Menu/MenuOptions';
import { useLocation } from 'react-router-dom';



function Services() {

  const location = useLocation();
  const libraryDetails = location.state?.libraryDetails || null;




  return (
    <div>

      <div>

        <Link to="/">

          <HomeIcon style={{ fontSize: 40, color: 'black' }} />

        </Link>


        <h1 style={{
          color: "black",
          textAlign: "center",
          fontSize: "60px",
          fontFamily: "sans-serif",
          marginTop: '-25px'
        }}> Bibliotecas Maringá </h1>

      </div>


      <Paper style={{
        width: 210,
        backgroundColor: 'black',
        padding: 10,
        boxSizing: 'border-box',
        height: '450px',
        marginTop: '-20px',
        marginRight: '10px'
      }}>
        <MenuOptions />


      </Paper>
      <div>
        {libraryDetails && (
          <div style={{
            marginTop: '-450px',
            marginLeft: '300px',
            color: 'greenyellow',
            backgroundColor: "black",
            padding: '5px',
            border: '2px solid #ddd',
            borderRadius: '15px',
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
            boxSizing: 'border-box',
            width: '550px',
            height: "450px",
            marginBottom: '15px',
            marginRight: '-20px'


          }}>
            <h2>Detalhes da Biblioteca</h2>
            <p>Nome: {libraryDetails.nome}</p>
            <p>Rua: {libraryDetails.rua}</p>
            <p>Número: {libraryDetails.numero}</p>
            <p>Cidade: {libraryDetails.cidade}</p>
            <p>Bairro: {libraryDetails.bairro}</p>
            <p>Estado: {libraryDetails.estado}</p>

          </div>
        )}
      </div>




    </div>
  )
}
export default Services