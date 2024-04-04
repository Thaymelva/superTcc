import * as React from 'react';
import {Box,Container,CssBaseline,Paper,Typography,IconButton,TextField} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';


export default function Perfil() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={2} sx={{ mt: 8, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
        <IconButton sx={{ alignSelf: 'flex-start' }}>
          <ArrowBackIcon />
        </IconButton>
        <GroupsIcon 
          sx={{ width: 100, height: 200  }}>
          </GroupsIcon>
        <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome"
            name="nome"
            autoFocus
            variant="standard"
            sx={{alignItems: 'right', color: "#07382E",  borderColor: '#07382E', '&:hover': {borderColor: '#07382E', backgroundColor: 'transparent'} }}
            >

        </TextField>
        <Box sx={{ width: '100%', mt: 3}}>
        <Typography sx={{mb:2}}>Função:</Typography>
        <Button
            fullWidth
            variant="outlined"
            sx={{backgroundColor:"#fff", color: "#07382E",  borderColor: '#07382E', '&:hover': {borderColor: '#07382E', backgroundColor: 'transparent',}, }}
        > Função
        </Button> 


        <Button
            fullWidth
            variant="outlined"
            sx={{mt:10, backgroundColor:"#fff", color: "#07382E",  borderColor: '#07382E', '&:hover': {borderColor: '#07382E', backgroundColor: 'transparent',}, }}
        > 
        Salvar Alterações
        </Button> 
        <Button
            fullWidth
            variant="outlined"
            color='error'
            >
            Sair do grupo
        </Button> 
        </Box>
      </Paper>
    </Container>
  );
}
