import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PostAddIcon from '@mui/icons-material/PostAdd';
import axios from 'axios'; 

const theme = createTheme();

export default function SignIn() {
  const [tituloTarefa, setTituloTarefa] = React.useState("");
  const [descricaoTarefa, setDescricaoTarefa] = React.useState("");
  const [dataLimite, setDataLimite] = React.useState(""); 
  const [usuarioId, setUsuarioId] = React.useState("");
  const [grupoId, setGrupoId] = React.useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Campos backend:', {
      usuario_id:1,
      grupo_id:1,
      titulo_tarefa : tituloTarefa,
      descricao_tarefa : descricaoTarefa,
      data_limite : dataLimite
    });

    try {
      const response = await axios.post('http://localhost:3307/api/tarefa', {
        usuario_id:1,
        grupo_id:1,
        titulo_tarefa : tituloTarefa,
        descricao_tarefa : descricaoTarefa,
        data_limite : dataLimite
      });

      console.log('Dados enviados para o backend:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar a tarefa:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={2} sx={{ mt: 8, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
        <PostAddIcon
          alt="Task Add"
          sx={{ width: 196.11, height: 184, marginBottom: 5, color: "#105F4F" }}
          variant="square"
        />
        <Typography component="h1" variant="h5" style={{ color: "#07382E", marginBottom: 4, fontWeight: 'bold' }}>
          Novo Item
        </Typography>
        <Typography component="h2" variant="body1" sx={{ mt: 2, mb: 2, textAlign: 'justify' }}>
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="titulo"
            label="Titulo"
            name="titulo"
            value={tituloTarefa}
            onChange={(e) => setTituloTarefa(e.target.value)}
            sx={{
              '& label.Mui-focused': {
                color: '#07382E',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#07382E',
                },
                '&:hover fieldset': {
                  borderColor: '#07382E',
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="descricao"
            label="Descrição"
            id="descricao"
            value={descricaoTarefa}
            onChange={(e) => setDescricaoTarefa(e.target.value)}
            sx={{
              '& label.Mui-focused': {
                color: '#07382E',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#07382E',
                },
                '&:hover fieldset': {
                  borderColor: '#07382E',
                },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="date"
            label="Date"
            name="date"
            value={dataLimite}
            onChange={(e) => setDataLimite(e.target.value)} // Corrigido
            sx={{
              '& label.Mui-focused': {
                color: '#07382E',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#07382E',
                },
                '&:hover fieldset': {
                  borderColor: '#07382E',
                },
              },
            }}
          />
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'right' }}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, backgroundColor: "#fff", color: "#07382E", borderColor: '#07382E', '&:hover': { borderColor: '#07382E', backgroundColor: 'transparent', }, }}
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
