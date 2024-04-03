import * as React from 'react';
import {Box,Container,CssBaseline,Paper,Typography,IconButton,Divider} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from '@mui/material/Link';
import GroupsIcon from '@mui/icons-material/Groups';


export default function Configuracoes() {
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
        <Typography component="h1" variant="h5">
          GERENCIAMENTO DE EQUIPE
        </Typography>
        <Box sx={{ width: '100%', mt: 3 }}>
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
            <Link href="#" color="inherit" underline="none">
              CONVIDAR MEMBRO
            </Link>
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
            <Link href="#" color="inherit" underline="none">
              REMOVER MEMBRO
            </Link>
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
            <Link href="#" color="inherit" underline="none">
              DESFAZER GRUPO
            </Link>
          </Typography>
          <Divider />
        </Box>
      </Paper>
    </Container>
  );
}
