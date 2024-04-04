import * as React from 'react';
import {Box,Button,Container,CssBaseline,Typography,IconButton,Paper} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';
import Logo from '../../img/logo.svg'
import { useState } from 'react';


export default function Validation() {
  
  const handleBack = () => {
  
  };

  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
  };

  const [currentButtonVariant, setCurrentButtonVariant] = useState('outlined');
    
  const handleButtonVariantChange = () => {
    if (currentButtonVariant === 'outlined') {
      setCurrentButtonVariant('contained');
    }
    else {
      setCurrentButtonVariant('outlined');
    }
  }

  

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={2} sx={{ mt: 8, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}></Paper>
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
            alt="User Image"
            src={Logo}
            sx={{ width: 145, height: 145, marginBottom: 5  }}
            variant="square"
        />
        <Typography component="h1" variant="h5" sx={{ mt: -1, mb: 2, fontWeight: 'bold' }}>
          Validacao da conta
        </Typography>
        <Typography component="h2" variant="body1" sx={{ mt: 2 }}>
          Informe o E-Mail ou Celular Cadastrado:
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Button
            type="submit"
            fullWidth
            variant= {currentButtonVariant}
            sx={{ mt: 3, backgroundColor:"#fff", color: "#07382E", borderColor: '#07382E','&:hover': {borderColor: '#07382E',backgroundColor: 'transparent',}, }}
            onClick={handleButtonVariantChange}
          >
            Email do brother
          </Button>
          <Button
            type="submit"
            fullWidth
            variant= {currentButtonVariant}
            sx={{ mt: 1, mb: 2, backgroundColor:"#fff", color: "#07382E", borderColor: '#07382E','&:hover': {borderColor: '#07382E',backgroundColor: 'transparent',},  }}
            onClick={handleButtonVariantChange}
          >
            Numero do Brother
          </Button>
          <Typography variant='subtitle2' sx={{ mt: 2, mb: 0, color: '#07382E'  }}>
          Tentar Novamente
        </Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 4 }}>
            Para Sua Segurança Enviaremos Um Código Para Validar Sua Redefinição De Senha.
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 1, backgroundColor:"#fff", color: "#07382E", borderColor: '#07382E','&:hover': {borderColor: '#07382E',backgroundColor: 'transparent',},  }}
          >
            Enviar Codigo
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 1, backgroundColor:"#fff", color: "#07382E", borderColor: '#07382E','&:hover': {borderColor: '#07382E',backgroundColor: 'transparent',},  }}
          >
            Avançar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
