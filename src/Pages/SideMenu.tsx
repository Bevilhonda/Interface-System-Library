import Paper from '@mui/material/Paper';
import MenuOptions from '../Menu/MenuOptions';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import {LibraryEntity} from '../Components/LibraryDropDown'

function SideMenu(props: { selectedLibrary: LibraryEntity | null }) {


  return (
    <div>
      <div style={{ marginTop: '-100px', textAlign: 'left' }}>

        <Link to="/">

          <HomeIcon style={{ fontSize: 40, color: 'black' }} />

        </Link>

      </div>

      <div>


        <Paper style={{
          width: 210,
          backgroundColor: 'black',
          padding: 10,
          boxSizing: 'border-box',
          height: '450px',
          marginTop: '130px',
          marginRight: '10px',
          border: '2px solid #ddd',
          borderRadius: '10px',
          boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',

        }}>
          <MenuOptions selectedLibrary={props.selectedLibrary} />

        </Paper>

        <div>
          {props.selectedLibrary &&(
            <div style={{
              marginTop: '-525px',
              marginLeft: '-1px',
              color: 'greenyellow',
              backgroundColor: "black",
              padding: '5px',
              border: '2px solid #ddd',
              borderRadius: '10px',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              boxSizing: 'border-box',
              width: '212px',
              height: "70px",
              marginBottom: '10px',
              marginRight: '-20px'


            }}>

              <h3 style={{
                fontSize: '15px',
                marginTop: '-1px'
              }}>Biblioteca selecionada: {props.selectedLibrary.nome}  </h3>

            </div>
          )}
        </div>

      </div>
    </div>
  )
}
export default SideMenu