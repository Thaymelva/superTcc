import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, CssBaseline, Paper, 
        Typography, Checkbox, Grid, Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Fab from '@mui/material/Fab';

// IMPORT ICONES
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';


export default function Central_Tarefa() {
    const navigate = useNavigate();

    const handleNovaTarefa = () => {
        navigate('/Criar_Tarefa');
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

    // Lista de usuários atribuídos à tarefa
    const usuariosAtribuidos = [
        { avatar: '/path/to/avatar1.jpg' },
        { avatar: '/path/to/avatar2.jpg' },
        { avatar: '/path/to/avatar3.jpg' }
    ];

    // Função para calcular a cor com base no período restante
    const getCorPrazo = (diasRestantes) => {
        if (diasRestantes <= 7) {
            return '#FF0000'; // Vermelho para menos de 7 dias
        } else if (diasRestantes <= 14) {
            return '#FFFF00'; // Amarelo para menos de 14 dias
        } else {
            return '#00FF00'; // Verde para mais de 14 dias
        }
    };

    // Função para calcular o período restante
    const calcularPrazo = () => {
        // Aqui você pode implementar a lógica para calcular os dias restantes até o término da tarefa
        // Por simplicidade, retornarei um número aleatório entre 1 e 30 para demonstração
        return Math.floor(Math.random() * 30) + 1;
    };

    // Função para renderizar os avatares dos usuários atribuídos à tarefa
    const renderAvatares = (maxAvatares) => {
        const avatares = [];
        const totalUsuarios = usuariosAtribuidos.length; 
        const usuariosRestantes = totalUsuarios - maxAvatares; 
        for (let i = 0; i < Math.min(maxAvatares, totalUsuarios); i++) {
            avatares.push(
            <Avatar 
                key={i} 
                src={usuariosAtribuidos[i].avatar} 
                sx={{ 
                    width: 32, 
                    height: 32, 
                    marginLeft: '-8px' 
                }} 
            />);
        }
        if (usuariosRestantes > 0) {
            avatares.push(
            <Avatar 
                key={maxAvatares} 
                src={`/path/to/avatar-placeholder.jpg`} 
                sx={{ 
                    width: 32, 
                    height: 32, 
                    marginLeft: '-8px' 
                }} 
            />);
        }
        return avatares;
    };

    const diasRestantes = calcularPrazo();
    const corPrazo = getCorPrazo(diasRestantes);
    const corTexto = corPrazo === '#FF0000' ? '#FFFFFF' : '#000000'; 

    const maxAvatares = 3; 

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
                        <CheckBoxOutlinedIcon 
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
                                mt: -3 
                                }}
                        >
                            Tarefas
                        </Typography>
                                    {/* CARD DE TAREFAS */}
                            <Card 
                                sx={{
                                    width: '100%', 
                                    mt: 2, mb:1, mx: 1, 
                                    boxShadow:'2px 0px 12px 5px rgba(0, 0, 0, 0.2)'
                                    }}
                            >

                                <CardContent 
                                    sx={{   
                                        padding: '4px 10px', 
                                        display: 'flex', 
                                        flexDirection: 'column' 
                                    }}
                                >
                                    
                                <Grid 
                                    container alignItems="center" 
                                    justifyContent="space-between" 
                                    spacing={1}
                                >

                                    <Grid item>
                                        <Typography 
                                            variant="h6" 
                                            component="h2"
                                            sx={{ 
                                                fontSize: '1.2rem' 
                                            }}
                                        >
                                            NOME DA TAREFA
                                        </Typography>
                                    </Grid>

                                    <Grid item >
                                        <Checkbox 
                                            disabled 
                                            sx={{  
                                                color: '#07382E'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                

                                <Box
                                    sx={{
                                        marginLeft: '2px', 
                                        marginTop: '10px', 
                                        backgroundColor: corPrazo,
                                        color: corTexto,
                                        padding: '4px',
                                        borderRadius: '5px',
                                        width: 'fit-content', 
                                        height: 'fit-content', 
                                    }}
                                >
                                    <Typography 
                                        variant="body2"
                                        sx={{ 
                                            fontSize: '0.70rem' 
                                        }}
                                    >
                                        Termina em {diasRestantes} dias
                                    </Typography>
                                </Box>

                                <Box 
                                    sx={{   
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        marginTop: '20px', 
                                        marginBottom: '-10px'
                                    }}
                                >
                                    {usuariosAtribuidos.slice(0, maxAvatares)
                                    .map((usuario, index) => (
                                        <Avatar
                                            key={index}
                                            src={usuario.avatar}
                                            sx={{ 
                                                width: 20, 
                                                height: 20, 
                                                marginLeft: index !== 0 ? '-8px' : '0' 
                                            }} 
                                        />
                                    ))}

                                    <Typography 
                                    variant="body2" 
                                    sx={{   fontSize: '0.70rem',
                                            marginLeft: '8px' 
                                        }}
                                    >
                                    {usuariosAtribuidos.map(usuario => usuario.nome).join(', ')}
                                    e mais {usuariosAtribuidos.length - maxAvatares} pessoas
                                    </Typography>

                                </Box>

                            </CardContent>

                    </Card>
                    
                    <Typography 
                        component="h2" 
                        variant="h6" 
                        sx={{ marginTop: '15px' }}
                    >
                        Tarefas Concluídas
                    </Typography>
                                        {/* BOTÃO DE CRIAR TAREFA  */}
                    <Box 
                        sx={{   
                            position: 'fixed', 
                            mt:60, 
                            marginLeft: '20%' 
                            }}
                    >
                        <Fab
                            onClick={handleNovaTarefa}
                            variant="extended"
                            size="small"
                            sx={{
                                borderRadius: '5px',
                                backgroundColor: "#07382E !important", 
                                '&:hover': {
                                    backgroundColor: "#5DA18F !important", 
                                }
                            }}
                        >
                            <Typography 
                                sx={{ color: "#ffffff !important" }}
                            >
                                Nova Tarefa
                            </Typography>
                        </Fab>
                    </Box>

                                                        {/* MENU PRINCIPAL */}

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