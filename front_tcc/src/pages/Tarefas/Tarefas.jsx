import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PostAddIcon from '@mui/icons-material/PostAdd'
;

const theme = createTheme();

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
        <Paper elevation={2} sx={{ mt: 8, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: "0" }}>
        <PostAddIcon
            alt="Task Add"
            sx={{ width: 196.11, height: 184, marginBottom: 5, color :"#105F4F" }}
            variant="square"
            
        />
          <Typography component="h1" variant="h5" style={{color :"#07382E" , marginBottom: 4, fontWeight: 'bold' }}>
            Novo Item
          </Typography>
          <Typography component="h2" variant="body1" sx={{ mt: 2, mb: 2, textAlign: 'justify' }}>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="titulo"
              label="Titulo"
              name="titulo"
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
                    name="descricao"
                    label="Descrição"
                    id="descricao"
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
                <Select
                    margin='normal'
                    fullWidth
                    labelId="prioridade"
                    id="prioridade"
                    label="Prioridade"
                    required
                    sx={{width: '100%' , mt: 2}}
                >
                    <MenuItem value={10}>Placeholder De Membro</MenuItem>
                </Select>
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
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
