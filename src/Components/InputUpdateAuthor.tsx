import { Box, Button, FormGroup, Paper, TextField } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useState } from "react";



const InputUpdateAuthor = function () {

  const [authorData, setAuthorData] = useState({
    nome: '',
    sobrenome: '',
    data_nascimento: '',
  });

  const entradaDeDados = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setAuthorData((estadoAnterior) => ({
      ...estadoAnterior,
      [name]: value,

    }));

  };
  
  const enviarDados = async (eventForm: React.FormEvent) => {

    eventForm.preventDefault();

    try {
      const response = await axios.put('http://localhost:8080/UpdateAuthor/${id}', authorData);


      alert('Autor cadastrado com sucesso!');

      setAuthorData({
        nome: '',
        sobrenome: '',
        data_nascimento: '',
      });

    } catch (error) {
      if (axios.isAxiosError(error)) {

        const axiosError: AxiosError = error;

        if (axiosError.response?.status === 400) {
          // verifica se existe o stattus da resposta e se é 400

          const errorMessage: string[] = (error.response?.data as string[]) || [];
          /*Aqui estamos acessando a mensagem de erro retornada pela API, que está na 
          propriedade data do objeto response. Como data pode ser undefined, estamos 
          usando o operador de acesso seguro (?.) para evitar erros caso response seja 
          undefined. Estamos também fazendo uma conversão para garantir que data seja
           uma array de strings. Caso não seja, inicializamos errorMessage como uma 
           array vazia.*/

          alert(errorMessage.join("\n"));

        } else {

          console.error("Erro ao cadastrar autor:", axiosError);

          alert("Erro ao cadastrar autor. Tente novamente mais tarde.");
        }

      } else {

        console.error("Erro ao cadastrar autor:", error);

        alert("Erro ao cadastrar autor. Tente novamente mais tarde.");

      }
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
export default InputUpdateAuthor;