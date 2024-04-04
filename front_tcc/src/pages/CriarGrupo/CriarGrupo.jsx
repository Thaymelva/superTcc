import * as React from 'react';
import {Box,Button,Container,CssBaseline,TextField,Typography,IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroupsIcon from '@mui/icons-material/Groups';

export default function ForgotPassword() {
  
  const handleBack = () => {
  
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <IconButton onClick={handleBack} sx={{ alignSelf: 'flex-start' }}>
          <ArrowBackIcon />
        </IconButton>
        <GroupsIcon
            sx={{ width: 145, height: 145, marginBottom: 5  }}
            variant="square"
        />
        <Typography component="h1" variant="h5" sx={{ mt: -1, mb: 2, fontWeight: 'bold' }}>
          Criar Grupo
        </Typography>
        <Typography component="h2" variant="body1" sx={{ mt: 2, mb: 2, textAlign: 'justify' }}>
        Preparado para torna a jornada da elaboração do seu TCC mais agradavel?  
        Primeiro vamos começar com a criação do grupo.
        </Typography>
        <Typography variant='subtitle2' sx={{textAlign: 'justify', }}>
        Não se preocupe você podera altera o nome e a imagem do grupo caso necessario.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="IDgroup-name"
            label="Nome do Grupo"
            name="group-name"
            autoComplete="group-name"
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
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 , backgroundColor:"#fff", color: "#07382E", borderColor: '#07382E','&:hover': {borderColor: '#07382E',backgroundColor: 'transparent', }, }}
          >
            Criar Grupo
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
