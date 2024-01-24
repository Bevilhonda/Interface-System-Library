import { Box, Button, FormGroup, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const InputFormAuthor = function () {

  const [authorData, setAuthorData] = useState({
    nome: '',
    sobrenome: '',
    data_nascimento: '',
  });

  const entradaDeDados = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setAuthorData((prevData) => ({
      ...prevData,
      [name]: value,

    }));

  };

  const enviarDados = async (eventForm: React.FormEvent) => {

    eventForm.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/InsertAuthor', authorData);

      alert('Autor cadastrado com sucesso!');

      setAuthorData({
        nome: '',
        sobrenome: '',
        data_nascimento: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar autor:', error);

      alert('Erro ao cadastrar autor. Verifique o console para mais detalhes.');
    }
  };

  return (

    <form onSubmit={enviarDados} id="authorForm">

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
            <legend>Cadastrar Autor</legend>
            
            <TextField
              id="nome" name="nome" label="Nome"
              variant="outlined"
              fullWidth margin="normal"
              value={authorData.nome}
              onChange={entradaDeDados} />

            <TextField
              id="sobrenome" name="sobrenome" label="Sobrenome"
              variant="outlined"
              fullWidth margin="normal"
              value={authorData.sobrenome}
              onChange={entradaDeDados} />

            <TextField
              id="data_nascimento" name="data_nascimento" label="Data Nascimento"
              variant="outlined"
              fullWidth margin="normal"
              value={authorData.data_nascimento}
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
export default InputFormAuthor;