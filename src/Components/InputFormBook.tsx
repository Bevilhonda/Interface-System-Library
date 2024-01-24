import { Box, Button, FormGroup, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const InputFormBook = function () {

  const location = useLocation();
  
  const getIdLibrary = location.state?.libraryDetails || null;

  const idLibrary = getIdLibrary.id_biblioteca;

  const [bookData, setBookData] = useState({
    titulo: " ",
    data_publication: "",
    edicao: "",
    fk_autor: "",
    fk_biblioteca: idLibrary
  });

  const entradaDeDados = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const enviarDados = async (eventForm: React.FormEvent) => {
    eventForm.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/InsertBook', bookData);
      
      alert('Livro cadastrado com sucesso!');

      setBookData({
        titulo: " ",
        data_publication: "",
        edicao: "",
        fk_autor: "",
        fk_biblioteca: idLibrary
      });

    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);

      alert('Erro ao cadastrar livro. Verifique o console para mais detalhes.');
    }
  };

  const [selectedAuthor, setSelectedAuthor] = useState<string>("");

  return (

    <form onSubmit={enviarDados} id="bookForm">

      <Paper elevation={3} style={{
        padding: '20px',
        margin: '20px 0',
        marginTop: '-535px',
        marginLeft: '250px',
        width: 200,
        color: 'blue'
      }}>
        <Box mb={2}>
          <FormGroup>
            <legend>Cadastrar Livro</legend>
            
            <TextField
              id="titulo" name="titulo" label="Titulo"
              variant="outlined"
              fullWidth margin="normal" 
              value={bookData.titulo}
              onChange={entradaDeDados} />

            <TextField
              id="data_publication" name="data_publication" label="Data Publicação"
              variant="outlined"
              fullWidth margin="normal" 
              value={bookData.data_publication}
              onChange={entradaDeDados}/>

            <TextField
              id="edicao" name="edicao" label="Edição"
              variant="outlined"
              fullWidth margin="normal"
              value={bookData.edicao}
              onChange={entradaDeDados} />

              <TextField
              id="fk_autor" name="fk_autor" label="Autor"
              variant="outlined"
              fullWidth margin="normal"
              value={bookData.fk_autor}
              onChange={entradaDeDados} />

          </FormGroup>
        </Box>


        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Paper>
    </form>

  )

}
export default InputFormBook;