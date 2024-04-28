import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box,Button, Container, CssBaseline, Paper, 
        Typography, IconButton, Grid, List, ListItemButton, 
        ListItemIcon, ListItemText, Collapse, Avatar } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// IMPORT ICONES 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess'; 
import ExpandMore from '@mui/icons-material/ExpandMore'; 
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

// IMPORT ICONES MENU 
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

// IMPORT POP-UP 
import Popup from './Pop_Up_2';

export default function Detalhes_Tarefa() {

  // POP-UP 
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };
  
  const handleClosePopup = () => {
    setOpenPopup(false);
  };
  
  const handleEditClick = () => {
    navigate('/Edt_Tarefa');
  };

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

    const TaskList = () => {
        const [open, setOpen] = useState(false);
        const [assignedUsers] = useState(["João", "Maria", "Carlos", "Ana", "Pedro"]);
      
        const handleClick = () => {
          setOpen(!open);
        };
      
        const generateSummary = () => {
          if (assignedUsers.length === 0) {
            return "Ninguém atribuído";
          } else if (assignedUsers.length <= 3) {
            return assignedUsers.join(", ");
          } else {
            return `${assignedUsers[0]} 
            e +${assignedUsers.length - 1} pessoas`;
          }
        };

        const renderAvatars = () => {
          if (assignedUsers.length === 0) {
            return null;
          } else if (assignedUsers.length === 1) {
            return (
              <Avatar 
                alt={assignedUsers[0]} 
                src={`https://source.unsplash.com/32x32/?${assignedUsers[0]}`} 
                sx={{ width: 24, height: 24, marginLeft: 10}} 
              />
            );
          } else {
            return (
              <>
                {assignedUsers.slice(0, 3).map((user, index) => (
                  <Avatar 
                    key={index} 
                    alt={user} 
                    src={`https://source.unsplash.com/32x32/?${user}`} 
                    sx={{ width: 24, height: 24, ml: -1}} 
                  />
                ))}
              </>
            );
          }
        };

        return (
          <List
            sx={{ width: '100%' }}
            component="nav"
            aria-labelledby="task-list-header"
          >
            <ListItemButton 
              onClick={handleClick} 
              sx={{ pr: -1 }}
            > 
              <ListItemIcon 
                sx={{ mr: -3 }}
              > 
                <GroupOutlinedIcon 
                  x={{ color: '#07382E' }} 
                />
              </ListItemIcon>
              {open ? (
                <ListItemText 
                  primary="Pessoas Atribuídas" 
                />
              ) : (
                <>
                  <ListItemText 
                    primary="Atribuído:" 
                    primaryTypographyProps={{ 
                      fontWeight: 'bold' 
                    }}
                  />
                  {renderAvatars()}
                  <ListItemText 
                      primary={`${assignedUsers[0]} 
                      e +${assignedUsers.length - 1} pessoas`} 
                      primaryTypographyProps={{ 
                        variant: 'body2', 
                        fontSize: '0.8rem' 
                      }} 
                      sx={{ marginLeft: 2 }} 
                  />
                </>
              )}
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse 
              in={open} 
              timeout="auto" 
              unmountOnExit
            >
              <List component="div" 
              disablePadding>
                {assignedUsers.map((user, index) => (
                  <ListItemButton 
                    key={index} 
                    sx={{ pl: 4 }}
                  >
                    <Avatar 
                      alt={user} 
                      src={`https://source.unsplash.com/32x32/?${user}`} 
                    />
                    <ListItemText primary={user} />
                  </ListItemButton>
                ))}
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
            mt: 5, 
            p: 2, 
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
          <CheckBoxOutlineBlankIcon 
          sx={{ 
            width: 50, 
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
            <Grid 
            container alignItems="center" 
            spacing={1}
            >

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
              padding: '10px'
            }}
          >
            <Grid 
              container 
              alignItems="center" 
              spacing={1}
            >

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

                                    {/* BOTÕES EDITAR E EXCLUIR  */}
          <Grid 
            container 
            spacing={2} 
            sx={{marginTop: '6%'}}
          >

            <Grid item xs={6}>
              <Button
                onClick={handleEditClick}
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                  mt: 2,
                  mb: 5,
                  maxWidth: "180px",
                  backgroundColor: "#FFFFFF",
                  color: "#07382E",
                  borderColor: "#07382E",
                  "&:hover": { 
                    backgroundColor: "#07382E", 
                    color: "#FFFFFF" 
                  }
                }}
              >
                EDITAR
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                onClick={handleOpenPopup}
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                  mt: 2,
                  mb: 5,
                  maxWidth: "180px",
                  backgroundColor: "transparent",
                  color: "#FF0000",
                  borderColor: "#FF0000",
                  "&:hover": {
                    backgroundColor: "#FF0000",
                    color: "#FFFFFF",
                    borderBlockColor: 'transparent'
                  }
                }}
              >
                  EXCLUIR
              </Button>
            </Grid>

          </Grid>
                                    {/* ABERTURA DE POP-UP  */}
          <Popup 
            open={openPopup} 
            handleClose={handleClosePopup} 
          />

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
                        fontSize: '2rem'  }} 
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
