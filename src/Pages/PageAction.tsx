import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import MenuOptions from '../Menu/MenuOptions';


function Services() {
  
  let nome = "Bibliotecas Maringá"


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
        }}> {nome} </h1>

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
        <MenuOptions/>
        
        
      </Paper>

  
      
      
    </div>
  )
}
export default Services