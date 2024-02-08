import { Box, Button, FormGroup, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { LibraryEntity } from '../Components/LibraryDropDown';
import GetAllAlthors, { AuthorEntity } from '../Components/GetAllAuthors';


const InputFormBook = function (props: { selectedLibrary: LibraryEntity | null }) {

  const [authorsList, setAuthorsList] = useState<AuthorEntity[] | null>(null);

  const handleAuthorsReceived = (authors: AuthorEntity[] | null) => {
    setAuthorsList(authors);
  };

  const [bookData, setBookData] = useState({
    titulo: " ",
    data_publication: "",
    edicao: "",
    fk_autor: "",
    fk_biblioteca: props.selectedLibrary?.id_biblioteca
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
        fk_biblioteca: props.selectedLibrary?.id_biblioteca
      });

    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);

      alert('Erro ao cadastrar livro. Verifique o console para mais detalhes.');
    }
  };


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
              onChange={entradaDeDados} />

            <TextField
              id="edicao" name="edicao" label="Edição"
              variant="outlined"
              fullWidth margin="normal"
              value={bookData.edicao}
              onChange={entradaDeDados} />


            <GetAllAlthors sendListAuthors={handleAuthorsReceived} />

            <InputLabel id="author-select-label">Selecione um Autor</InputLabel>


            <Select
              labelId="author-select-label"
              id="author-select"
              value={bookData.fk_autor}
              label="Selecione um Autor"
              onChange={(e) => setBookData({ ...bookData, fk_autor: e.target.value })}

            >
              <MenuItem value="">
                Selecione um Autor
              </MenuItem>
              {authorsList && authorsList.map((author) => (

                <MenuItem key={author.id} value={author.id}>
                  {`${author.name.name} ${author.name.lastName} ${author.id}`}
                </MenuItem>

              ))}
            </Select>

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