import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box,Button, Container, CssBaseline, Paper, 
        Typography, IconButton, Grid, List, ListItemButton, 
        ListItemIcon, ListItemText, Collapse, Avatar } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// IMPORT ICONES
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

// IMPORT ICONES MENU
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star'; 


export default function Tarefa_Concluida() {

    const navigate = useNavigate();
    const handleBack = () => {
      navigate('/Central_Tarefas');
    };

    const handleHome= () => {
      navigate('/');
    };

    const handleProgresso= () => {
        navigate('/');
    };

    const handleAvaliacao= () => {
        navigate('/');
    };

    const [value, setValue] = React.useState(0);
    const descricao = "Descrição da tarefa"; // Definindo a descrição aqui

   // TaskList para mostrar quem concluiu a tarefa
   const TaskList = () => {
    const completedBy = "João"; 
    const completionDate = "14/04/2024"; 
    const assignedTo = "Maria"; 
    
    return (
      <List 
        sx={{ width: '100%' }} 
        component="nav" 
        aria-labelledby="task-list-header"
      >
        <ListItemButton 
          sx={{ pr: -1 }}
        >
          <ListItemIcon 
            sx={{ mr: -3 }}
          >
            <HowToRegOutlinedIcon 
              sx={{ color: '#07382E' }}
            />
          </ListItemIcon>

          <ListItemText 
            primary={
              <span 
                style={{ fontWeight: 'bold' }}
              >
                Concluído por:
              </span>
            }
            primaryTypographyProps={{ 
              variant: 'body2', 
              fontSize: '0.8rem' 
            }}
          />
        </ListItemButton>

        <ListItemButton sx={{ pr: -1 }}>
          <Avatar 
            alt={completedBy} 
            src={`https://source.unsplash.com/32x32/?${completedBy}`} 
            sx={{ 
              width: 24, 
              height: 24, 
              mr: 2, 
              ml: 3 
            }} 
          />

          <ListItemText 
            primary={
              <>
                <span>{completedBy}</span>
                {completionDate ? (
                  <span 
                    style={{ marginLeft: '6rem' }}
                  >
                    em: 
                    {completionDate}
                  </span>
                ) : (
                  <span 
                    style={{ 
                      color: 'red', 
                      fontWeight: 'bold', 
                      marginLeft: '6rem' 
                    }}
                  > 
                    NÃO CONCLUÍDA
                  </span>
                )}
              </>
            }
            primaryTypographyProps={{ 
              variant: 'body2', 
              fontSize: '0.8rem', 
              display: 'flex', 
              alignItems: 'center' 
            }}
            sx={{ marginLeft: '0.5rem' }} 
          />
        </ListItemButton>

        <ListItemButton sx={{ pr: -1 }}>
          <Avatar 
            alt={assignedTo} 
            src={`https://source.unsplash.com/32x32/?${assignedTo}`} 
            sx={{ 
              width: 24, 
              height: 24, 
              mr: 2, 
              ml: 3 
            }} 
          />
          <ListItemText 
            primary={
              <>
                <span>{assignedTo}</span>
                <span 
                  style={{ 
                    color: 'red', 
                    fontWeight: 'bold', 
                    marginLeft: '6rem' 
                    }}
                > 
                  NÃO CONCLUÍDA
                </span>
              </>
            }
            primaryTypographyProps={{
              variant: 'body2', 
              fontSize: '0.8rem', 
              display: 'flex', 
              alignItems: 'center' 
            }}
            sx={{ marginLeft: '0.5rem' }} 
          />
        </ListItemButton>

        <Collapse 
          in={true} 
          timeout="auto" 
          unmountOnExit
        >
          <List 
            component="div" 
            disablePadding
          >
            {/* Aqui você pode adicionar mais detalhes da tarefa, se necessário */}
          </List>
        </Collapse>
      </List>
    );
  };
  
  
    return (
      <Container 
        component="main" 
        maxWidth="xs"
      >
        <CssBaseline />
        <Paper 
          elevation={2} 
          sx={{ 
            mt: 5, p: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            boxShadow: "0" 
          }}
        >
                                    {/* CABEÇALHO  */}
          <IconButton
          onClick={handleBack} 
          sx={{ alignSelf: 'flex-start' }}
          >
            <ArrowBackIcon sx={{ fontSize: 35 }} />
          </IconButton>

          <CheckBoxOutlinedIcon 
            sx={{ 
              width: 70, 
              height: 100, 
              color:'#07382E' 
            }}
          />

          <Typography 
            component="h1" 
            variant="h9" 
            sx={{ 
              color:'#07382E', 
              mt: -1 
            }}
          >
            Nome da Tarefa
          </Typography>

                                    {/* CAMPO DE LEITURA DATA  */}
          <Box 
            sx={{ 
              boxShadow:'2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
              width:'100%', 
              height: '100%', 
              borderRadius: '5px', 
              marginTop: '5%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: '-10px' 
            }}
          >
            <Grid container alignItems="center" spacing={1}>

              <Grid item>
                <IconButton disabled>
                  <CalendarMonthIcon 
                    sx={{
                      color:'#07382E', 
                      marginLeft: '60%'
                      }} 
                  />
                </IconButton>
              </Grid>

              <Grid item>
                <Typography 
                  variant="subtitle1" 
                  gutterBottom 
                  sx={{ 
                    marginTop: '5%', 
                    textAlign: 'center', 
                    fontWeight: 'bold'
                  }}
                >
                  Data de Conclusão:
                </Typography>
              </Grid>

              <Grid item>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    textAlign: 'center', 
                    marginTop: '20%', 
                    marginLeft: '10%'
                  }}
                >
                  {/* {task.dueDate} */} 
                </Typography>
              </Grid>

            </Grid>
          </Box>

                                    {/* CAMPO DE LEITURA ATRIBUIDOS  */}
          <Box 
            sx={{ 
              boxShadow:'2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
              width:'100%', 
              height: '100%', 
              borderRadius: '5px', 
              marginTop: '5%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              padding: '-10px' 
            }}
          >
            <TaskList />
          </Box>

                                    {/* CAMPO DE LEITURA DESCRIÇÃO  */}
          <Box
            sx={{
              boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
              width: '100%', 
              height: '100%',
              borderRadius: '5px',
              marginTop: '5%',
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'flex-start', 
            }}
          >
            <Grid container alignItems="center" spacing={1}>

              <Grid item>
                <IconButton disabled>
                  <EditNoteOutlinedIcon 
                  sx={{ color: '#07382E' }} 
                  />
                </IconButton>
              </Grid>

              <Grid item>
                <Typography 
                  variant="subtitle1" 
                  gutterBottom 
                  sx={{ fontWeight: 'bold' }}
                >
                  Descrição:
                </Typography>
              </Grid>
            </Grid>

            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                textAlign: 'left', 
                marginTop: '2px', 
                marginLeft: '3%' 
              }}
            > 
              {descricao}
            </Typography>

          </Box>

                                    {/* MENU PRINCIPAL   */}
          <Box elevation={3} >

            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
              }}
              sx={{   
                position: 'fixed', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                backgroundColor: '#5DA18F80', 
                height: '9%'
              }}
            >

            <BottomNavigationAction 
              onClick={handleHome}
              label="Home" 
              icon={<HomeIcon 
                sx={{ 
                  fill: value === 0 ? '#07382E' : 'none', 
                  stroke: '#07382E', 
                  strokeWidth: 2, 
                  fontSize: '2rem' 
                }} 
              />}
                sx={{
                  color:  '#07382E', 
                  fontSize: '3em', 
                  fontWeight: 'bold', 
                  '& .MuiBottomNavigationLabel': { 
                    gap: '10x' 
                  } 
              }}
            />

            <BottomNavigationAction 
              onClick={handleProgresso}
              label="Progresso" 
              icon={<SchoolIcon 
                      sx={{ 
                        fill: value === 1 ? '#07382E' : 'none', 
                        stroke: '#07382E', 
                        strokeWidth: 2, 
                        fontSize: '2rem' }} 
                  />}
                      sx={{ 
                        color: '#07382E', 
                        fontSize: '2rem', 
                        fontWeight: 'bold', 
                        '& .MuiBottomNavigationLabel': { 
                          gap: '10px' 
                        } 
                      }}
            />

            <BottomNavigationAction 
              onClick={handleAvaliacao}
              label="Avaliação" 
              icon={<StarIcon 
                      sx={{ 
                        fill: value === 2 ? '#07382E' : 'none', 
                        stroke: '#07382E', 
                        strokeWidth: 2, 
                        fontSize: '2rem'  
                      }} 
                  />}
                      sx={{ 
                        color: '#07382E', 
                        fontSize: '2rem', 
                        fontWeight: 'bold', 
                        '& .MuiBottomNavigationLabel': { 
                          gap: '10px' 
                        } 
                      }}
            />

          </BottomNavigation>

        </Box>

      </Paper>
    </Container>
  );
}
