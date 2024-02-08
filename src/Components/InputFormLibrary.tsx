import {
  Box, Button, FormControl, MenuItem, FormGroup,
  InputLabel, Paper, Select, SelectChangeEvent, TextField
} from "@mui/material";
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Estado {
  sigla: string;

}

interface Municipio {
  nome: string;
}

function InputFormLibrary() {
  const [estados, setEstados] = useState<Estado[]>([]);

  const [cidades, setCidades] = useState<Municipio[]>([]);

  const [selectedUF, setSelectedUF] = useState<string>("");

  const [selectedCidade, setSelectedCidade] = useState<string>("");

  const [libraryData, setLibraryData] = useState({
    nome: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: ""

  })

  const entradaDeDados = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLibraryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {

    const buscarUfApiIBGE = async () => {
      try {

        const response = await axios.get(
          'https://servicodados.ibge.gov.br/api/v1/localidades/estados');

        setEstados(response.data);

      } catch (error) {
        console.error('Erro ao buscar estados:', error);
      }
    };

    buscarUfApiIBGE();
  }, []);

  const mudancaDeEstado = async (event: SelectChangeEvent<string>) => {

    const uf = event.target.value;

    setSelectedUF(uf);

    try {
      const response = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);

      const cidadesDoEstado: Municipio[] = response.data.map(
        (cidade: { nome: string }) => (
          { nome: cidade.nome }));

      setCidades(cidadesDoEstado);

      setSelectedCidade("");

    } catch (error) {

      console.error('Erro ao buscar cidades:', error);

    }
  };

  const mudancaDeCidade = (event: SelectChangeEvent<string>) => {

    setSelectedCidade(event.target.value);

  };

  const enviarDados = async (eventForm: React.FormEvent) => {

    eventForm.preventDefault();

    try {

      const dataToSend = {
        ...libraryData,

        estado: selectedUF,

        cidade: selectedCidade
      };

      const response = await axios.post('http://localhost:8080/InsertLibrary', dataToSend);

      alert('Biblioteca cadastrada com sucesso!');

      setLibraryData({
        nome: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: ""

      })
    } catch (error) {
      console.error('Erro ao cadastrar Biblioteca', error);
    }
  }



  return (

    <form onSubmit={enviarDados} id="libraryForm">

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

            <legend>Cadastrar Biblioteca</legend>

            <TextField
              id="nome" name="nome" label="Nome"
              variant="outlined"
              fullWidth margin="normal"
              value={libraryData.nome}
              onChange={entradaDeDados}
            />

            <TextField
              id="rua" name="rua" label="Rua/Avenida"
              variant="outlined"
              fullWidth margin="normal"
              value={libraryData.rua}
              onChange={entradaDeDados}
            />

            <TextField
              id="numero" name="numero" label="Número"
              variant="outlined"
              fullWidth margin="normal"
              value={libraryData.numero}
              onChange={entradaDeDados}
            />

            <TextField
              id="bairro" name="bairro" label="Bairro"
              variant="outlined"
              fullWidth margin="normal"
              value={libraryData.bairro}
              onChange={entradaDeDados}
            />

            <FormControl fullWidth margin="normal" style={{ height: '40px' }}>
              <InputLabel id="select-uf-label">UF:</InputLabel>
              <Select
                id="select-uf"
                value={selectedUF}
                label="UF"
                onChange={(event: SelectChangeEvent<string>) => mudancaDeEstado(event)}
              >
                <MenuItem value="" disabled>
                  Selecione uma opção
                </MenuItem>
                {estados.map(estado => (
                  <MenuItem key={estado.sigla} value={estado.sigla}>
                    {estado.sigla}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal" style={{ height: '40px' }}>
              <InputLabel id="select-cidade-label">Cidade:</InputLabel>
              <Select
                labelId="select-cidade-label"
                id="select-cidade"
                value={selectedCidade}
                label="Cidade"
                onChange={mudancaDeCidade}
              >
                <MenuItem value="0">Selecione uma opção</MenuItem>
                {cidades.map((cidade, index) => (
                  <MenuItem key={index} value={cidade.nome}>
                    {cidade.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </FormGroup>
        </Box>


        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Paper>
    </form>

  )

}
export default InputFormLibrary;