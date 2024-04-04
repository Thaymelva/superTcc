import * as React from 'react';
import {Box,Button,Container,CssBaseline,TextField,Typography,IconButton} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import Chave from '../../img/Group 36.svg'

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
        <Avatar
            alt="Key Icon"
            src={Chave}
            sx={{ width: 145, height: 145, marginBottom: 5  }}
            variant="square"
        />
        <Typography component="h1" variant="h5" sx={{ mt: -1, mb: 2, fontWeight: 'bold' }}>
          Redefinir
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography variant="subtitle1">
          Codigo:
        </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-Mail ou Celular"
            name="email"
            autoComplete="email"
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

        <Typography variant="subtitle1">
          Nova Senha:
        </Typography>
        <TextField
            margin="normal"
            required
            fullWidth
            id="nova-senha"
            label="Nova Senha"
            name="nova-senha"
            autoComplete="new-password"
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

        <Typography variant="subtitle1">
          Confirmar nova senha:
        </Typography>
        <TextField
            margin="normal"
            required
            fullWidth
            id="confirmar-senha"
            label="Confirmar nova senha"
            name="confirmar-senha"
            autoComplete="confirm-new-password"
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
            sx={{ mt: 3, mb: 2, backgroundColor:"#fff", color: "#07382E", borderColor: '#07382E','&:hover': {borderColor: '#07382E',backgroundColor: 'transparent',}, }}
          >
            Redefinir
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
