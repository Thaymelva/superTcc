import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Container, CssBaseline, Paper, Typography, IconButton, 
        Grid, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Avatar, 
        Menu, MenuItem, Checkbox, TextField } from '@mui/material';
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
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

// IMPORT ICONES MENU 
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

// IMPORT POP-UP 
import Popup from './Pop_Up_1';

export default function Criar_Tarefa() {
    const [titulo, setTitulo] = useState('');
    const [dataConclusao, setDataConclusao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [openPopup, setOpenPopup] = useState(false);
    const [value, setValue] = useState(0);
    const [assignedUsers, setAssignedUsers] = useState(["João", "Maria", "Carlos", "Ana", "Pedro"]);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Título:', titulo);
        console.log('Data de Conclusão:', dataConclusao);
        console.log('Descrição:', descricao);
        setTitulo('');
        setDataConclusao('');
        setDescricao('');
    };

    const navigate = useNavigate();
    
    const handleOpenPopup = () => {
        setOpenPopup(true);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
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

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (user) => {
        const index = assignedUsers.indexOf(user);
        if (index === -1) {
            setAssignedUsers([...assignedUsers, user]);
        } else {
            const updatedUsers = [...assignedUsers];
            updatedUsers.splice(index, 1);
            setAssignedUsers(updatedUsers);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const UserListMenu = () => {
        return (
            <Menu
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'user-list-menu',
                }}
            >
                {getAllUsers().map((user, index) => (
                    <MenuItem 
                        key={index} 
                        onClick={() => handleMenuItemClick(user)}>
                        <Checkbox 
                            checked={assignedUsers.includes(user)} 
                        />
                        <ListItemText primary={user} />
                    </MenuItem>
                ))}
            </Menu>
        );
    };

    const getAllUsers = () => {
        const allUsers = ['João', 'Maria', 'Carlos', 'Ana', 'Pedro'];
        return allUsers;
    };

    const TaskList = () => {
        const [open, setOpen] = useState(false);
        const [userListOpen, setUserListOpen] = useState(false); 
    
        const handleListClick = () => {
            setOpen(!open);
        };
    
        const handleUserClick = () => {
            setUserListOpen(false); 
        };
    
        const handleUserListClick = () => {
            setUserListOpen(!userListOpen); 
        };
    
        const renderAvatars = () => {
            if (assignedUsers.length === 0) {
                return null;
            } else if (assignedUsers.length === 1) {
                return (
                    <Avatar 
                        alt={assignedUsers[0]} 
                        src={`https://source.unsplash.com/32x32/?${assignedUsers[0]}`} 
                        sx={{   
                            width: 24, 
                            height: 24, 
                            marginLeft: 10 
                        }} 
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
                                sx={{   
                                    width: 24, 
                                    height: 24, 
                                    ml: -1 
                                }} 
                            />
                        ))}
                    </>
                );
            }
        };
    
        const summary = assignedUsers.length === 0 ? 
        "Nenhum atribuído" : renderSummary();
    
        return (
            <List 
                sx={{ width: '100%' }} 
                component="nav" 
                aria-labelledby="task-list-header"
            >
                <ListItemButton 
                    onClick={handleListClick} 
                    sx={{ pr: 0 }}
                >

                    <ListItemIcon 
                        sx={{ mr: -3 }}>
                        <GroupOutlinedIcon 
                            sx={{ color: '#07382E' }} />
                    </ListItemIcon>

                    <ListItemText 
                        primary="Atribuído:" 
                        primaryTypographyProps={{ 
                            fontWeight: 'bold' 
                        }} 
                    />
                            {renderAvatars()}
                    <ListItemText 
                        primary={summary} 
                        primaryTypographyProps={{ 
                            variant: 'body2', 
                            fontSize: '0.79rem' 
                        }} 
                        sx={{ marginLeft:1 }} 
                    />

                    <IconButton 
                        onClick={handleUserListClick}
                        > 
                        {userListOpen ? <ExpandLess /> : <ExpandMore />} 
                    </IconButton>

                </ListItemButton>

                <Collapse 
                    in={open} 
                    timeout="auto" 
                    unmountOnExit>
                    <List 
                        component="div" 
                        disablePadding
                    >
                        {assignedUsers.length === 0 ? (
                            <ListItemButton 
                                sx={{ pl: 4 }}
                            >
                                <ListItemText 
                                    primary="Nenhum atribuído"
                                />
                            </ListItemButton>
                        ) : (
                            getAllUsers().map((user, index) => (
                                <ListItemButton 
                                    key={index} 
                                    sx={{ pl: 4 }} 
                                    onClick={handleUserClick}
                                >
                                    <Checkbox 
                                        checked={assignedUsers.includes(user)} 
                                        onClick={() => 
                                        handleMenuItemClick(user)} 
                                    />
                                    <Avatar 
                                        alt={user} 
                                        src={`https://source.unsplash.com/32x32/?${user}`} 
                                    />
                                    <ListItemText primary={user} />
                                </ListItemButton>
                            ))
                        )}
                    </List>
                </Collapse>
            </List>
        );
    };
    


    const renderSummary = () => {
        if (assignedUsers.length === 0) {
            return "Ninguém atribuído";
        } else if (assignedUsers.length <= 3) {
            return assignedUsers.join(", ");
        } else {
            return `${assignedUsers[0]}
            e +${assignedUsers.length - 1} pessoas`;
        }
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
                        color: '#07382E', 
                        mt: -5 
                        }} 
                />

                <Typography 
                    component="h1" 
                    variant="h9" 
                    sx={{ 
                        color: '#07382E',
                        mt: -1 
                    }}
                >
                    Nova Tarefa 
                </Typography>

                <form onSubmit={handleSubmit}>
                <Box 
                    sx={{   
                        boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                        width: '100%', 
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
                        container 
                        alignItems="center" 
                        spacing={1}
                    >

                        <Grid item>
                            <IconButton disabled>
                                <CreateOutlinedIcon 
                                    sx={{ 
                                        color: '#07382E', 
                                        marginLeft: '60%', 
                                        alignItems: 'center' 
                                        }} 
                                />
                            </IconButton>
                        </Grid>
                                        {/* CAMPO DE TITULO DE TAREFA  */}
                        <Grid item>
                            <Typography 
                                variant="subtitle1" 
                                gutterBottom 
                                sx={{   
                                    marginTop: '10%', 
                                    textAlign: 'center', 
                                    fontWeight: 'bold' 
                                }}
                            >
                                Título:
                            </Typography>
                        </Grid>

                        <Grid item>
                        <TextField
                            fullWidth
                            value={titulo}
                            onChange={(event) => 
                            setTitulo(event.target.value)}
                            variant="standard"
                        />
                        </Grid>
                    </Grid>
                </Box>

                                    {/* CAMPO DATA DE CONCLUSÃO  */}

                <Box 
                    sx={{   
                        boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                        width: '100%', 
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
                        container 
                        alignItems="center" 
                        spacing={1}
                    >
                        
                        <Grid item>
                            <IconButton disabled>
                                <CalendarMonthIcon 
                                    sx={{ 
                                        color: '#07382E', 
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
                            <TextField
                                fullWidth
                                type="date"
                                value={dataConclusao}
                                onChange={(event) => 
                                setDataConclusao(event.target.value)}
                                variant="standard"
                            />
                        </Grid>
                    </Grid>
                </Box>
                                    {/* CAMPO PARA ATRIBUIR A TAREFA  */}
                <Box 
                    sx={{   
                        boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)', 
                        width: '100%', 
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

                                    {/* CAMPO PARA INSERIR DESCRIÇÃO DE TAREFA  */}

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

                    <TextField
                        fullWidth
                        value={descricao}
                        onChange={(event) => 
                        setDescricao(event.target.value)}
                        variant="standard"
                    />

                </Box>

            </form>

                                    {/* BOTÃO PARA CRIAR TAREFA  */}
            <Grid 
                container 
                justifyContent="center" 
                alignItems="center" 
                spacing={2}
            >

                <Grid item xs={6}>
                    <Button
                        onClick={handleOpenPopup}
                        type="submit"
                        fullWidth
                        variant="outlined"
                        sx={{
                            mt: 5,
                            mb: 10,
                            maxWidth: "180px",
                            alignItems: "center",
                            backgroundColor: "#FFFFFF",
                            color: "#07382E",
                            borderColor: "#07382E",
                            "&:hover": { 
                                backgroundColor: "#07382E", 
                                color: "#FFFFFF" 
                            }
                        }}
                    >
                        CRIAR TAREFA
                    </Button>
                </Grid>

            </Grid>

                                    {/* ABERTURA DE POP-UP  */}
            <Popup 
                open={openPopup} 
                handleClose={handleClosePopup} 
            />

                                    {/* MENU PRINCIPAL  */}
            <Box elevation={3} >

                <BottomNavigation
                    sx={{   
                        position: 'fixed', 
                        bottom: 0, 
                        left: 0, 
                        right: 0, 
                        backgroundColor: '#5DA18F80', 
                        height: '9%'
                    }}
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
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
