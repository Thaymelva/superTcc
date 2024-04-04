import * as React from 'react';
import {Box,Container,CssBaseline,Paper,Typography,IconButton,Divider, Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import Avatar from '@mui/material/Avatar';


export default function Configuracoes() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={2} sx={{ mt: 8, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
        <IconButton sx={{ alignSelf: 'flex-start' }}>
          <ArrowBackIcon />
        </IconButton>
        <GroupRemoveIcon
          sx={{ width: 100, height: 200  }}>
          </GroupRemoveIcon>
        <Typography component="h1" variant="h5">
          REMOVER MEMBRO
        </Typography>
        <Box sx={{ width: '100%', mt: 3 }}>
            <Box sx={{ mt: 1, mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar
                alt="Avatar"
                src={Avatar}
                sx={{ width: 30, height: 30 }}
                variant="square"
                />
                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                    MEMBRO 1
                </Typography>
                <Button variant='outlined' color='error'>
                    Remover
                </Button>
            </Box>
          <Divider />
            <Box sx={{ mt: 1, mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar
                alt="Avatar"
                src={Avatar}
                sx={{ width: 30, height: 30 }}
                variant="square"
                />
                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                    MEMBRO 2 
                </Typography>
                <Button variant='outlined' color='error'>
                    Remover
                </Button>
            </Box>
          <Divider />
            <Box sx={{ mt: 1, mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Avatar
                alt="Avatar"
                src={Avatar}
                sx={{ width: 30, height: 30 }}
                variant="square"
                />
                <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>
                    MEMBRO 3
                </Typography>
                <Button variant='outlined' color='error'>
                    Remover
                </Button>
            </Box>
          <Divider />
        </Box>
      </Paper>
    </Container>
  );
}
