import * as React from 'react';
import {Box,Button,Container,CssBaseline,Typography,IconButton,Paper} from '@mui/material';
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
        <GroupsIcon
          sx={{ width: 300, height: 300, marginBottom: 5  }}
          variant="square"
        >
        </GroupsIcon>
        <Typography component="h1" variant="h5" sx={{ mt: -1, mb: 2, fontWeight: 'bold', }}>
          Desfazer Grupo
        </Typography>
        <Typography component="h2" variant="body1" sx={{ mt: 2, mb: 2, color: "#07382E" }}>
        AO  DESFAZER O GRUPO (NOME DO GRUPO) TODAS AS MENSAGENS, EVENTOS, TAREFAS, DOCUMENTOS E MÍDIAS E USUARIOS SERÃO APAGADOS 
        </Typography>

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color='error'
          >
            DESFAZER GRUPO
          </Button>
        </Box>
    </Container>
  );
}
