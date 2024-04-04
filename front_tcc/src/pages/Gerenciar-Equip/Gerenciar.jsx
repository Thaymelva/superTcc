import * as React from 'react';
import {Box,Container,CssBaseline,Paper,Typography,IconButton,Switch,Divider} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from '@mui/material/Link';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';


export default function Configuracoes() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={2} sx={{ mt: 8, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
        <IconButton sx={{ alignSelf: 'flex-start' }}>
          <ArrowBackIcon />
        </IconButton>
        <SettingsIcon
          sx={{ width: 100, height: 200  }}>
          </SettingsIcon>
        <Typography component="h1" variant="h5">
          CONFIGURAÇÕES
        </Typography>
        <Box sx={{ width: '100%', mt: 3 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', }}>
            NOTIFICAÇOES 
            <NotificationsActiveOutlinedIcon            >
            </NotificationsActiveOutlinedIcon>
          </Typography>
          <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            EVENTOS 
            <Switch />
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            TAREFAS 
            <Switch />
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            MENSAGENS 
            <Switch />
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
            <Link href="#" color="inherit" underline="none">
              GERENCIAMENTO DE EQUIPE
            </Link>
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
            <Link href="#" color="inherit" underline="none">
              CENTRAL DE AJUDA
            </Link>
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
            <Link href="#" color="inherit" underline="none">
              TERMOS E PRIVACIDADE
            </Link>
          </Typography>
          <Divider />
          <Typography variant="subtitle1" sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
            <Link href="#" color="inherit" underline="none">
              AVALIE-NOS
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
