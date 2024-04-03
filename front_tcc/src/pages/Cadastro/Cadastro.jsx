import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../../img/logo.svg'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios';


const theme = createTheme();

export default function SignIn() {

  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [curso, setCurso] = useState("");
  const [funcao, setFuncao] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Campos backend:', {
      name,
      email,
      celular,
      password,
      curso, 
      funcao,
    });

    try{
      const response = await axios.post('http://localhost:3307/api/usuario', {
        name,
        email,
        celular,
        password,
        curso, 
        funcao,
      });
    
      console.log('Dados enviados para o backend:', response.data); 

    } catch (error){
      console.error('Erro ao cadastrar usuário:', error); 
      
    }
  };

  return (
    <ThemeProvider theme={theme}>
        <Paper elevation={2} sx={{ mt: 8, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
        <Avatar
            alt="User Image"
            src={Logo}
            sx={{ width: 196.11, height: 184, marginBottom: 5  }}
            variant="square"
            
        />
          <Typography component="h1" variant="h5" style={{color :"#07382E" , marginBottom: 4, fontWeight: 'bold' }}>
            Cadastro
          </Typography>
          <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Seu Nome"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                    name="email"
                    label="E-Mail"
                    id="email"
                    autoComplete="email-password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                component: 'form'
                }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="smartphone-number"
                    label="Numero do Celular"
                    id="smartphone-number"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
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
                    type='password'
                    name="password"
                    label="Senha"
                    id="password"
                    autoComplete='current-password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    fullWidth
                    name="confirm-password"
                    label="Confirme sua senha"
                    type='password'
                    id="confirm-password"
                    autoComplete='current-password'
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
            


                <Select
                    labelId="cursos"
                    id="cursos"
                    label="Selecione seu curso"
                    required
                    fullWidth
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                    sx={{width: '100%' , mt: 2}}
                >
                    <MenuItem value={'Desenvolvimento De Sistemas'}>Desenvolvimento De Sistemas</MenuItem>
                    <MenuItem value={'Redes de computadores'}>Redes de computadores</MenuItem>
                    <MenuItem value={'Administraçao'}>Administraçao</MenuItem>
                    <MenuItem value={'Logististica'}>Logististica</MenuItem>
                    <MenuItem value={'Automação'}>Automação</MenuItem>
                    <MenuItem value={'Eletroeletronica'}>Eletroeletronica</MenuItem>
                </Select>

                <Select
                    labelId="funcao"
                    id="funcao"
                    label="Selecione sua função"
                    required
                    fullWidth
                    value={funcao}
                    onChange={(e) => setFuncao(e.target.value)}
                    sx={{width: '100%' , mt: 2}}
                >
                    <MenuItem value={'LIDER'}>Lider do Grupo</MenuItem>
                    <MenuItem value={'MEMBRO DE GRUPO'}>Membro do grupo</MenuItem>
                    <MenuItem value={'ORIENTADOR'}>Orientador</MenuItem>
                </Select>

            </Box>



            <Grid container>
              <Grid item xs={12} sx={{ textAlign: 'right' }}>

              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2, backgroundColor:"#fff", color: "#07382E",  borderColor: '#07382E', '&:hover': {borderColor: '#07382E', backgroundColor: 'transparent',}, }}
            >
              Cadastrar
            </Button>
          </Box>
        </Paper>
    </ThemeProvider>
  );
}