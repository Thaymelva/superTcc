import * as React from 'react';
import {Box,Button,Container,CssBaseline,TextField,Typography,IconButton,Paper
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from '@mui/material/Avatar';

export default function ValidationAccountCode() {
  
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
        <Avatar
            alt="Avatar"
            src={Avatar}
            sx={{ width: 145, height: 145, marginBottom: 5  }}
            variant="square"
        />
        <Typography component="h1" variant="h5" sx={{ mt: -1, mb: 2, fontWeight: 'bold' }}>
          Validaçao de Conta
        </Typography>
        <Typography component="h2" variant="body1" sx={{ mt: 2, mb: 2 }}>
          Codigo:
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="codigo"
            label="0000"
            name="codigo"
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
            Avançar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
