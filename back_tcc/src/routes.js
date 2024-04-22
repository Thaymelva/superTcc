const express = require('express');
const router = express.Router();
const routes = express()

const usuariosController = require('./controllers/usuariosController.js');
const tipoController = require('../src/controllers/tipoController.js');
const cursosController = require('../src/controllers/cursosController.js');
const gruposController = require('./controllers/gruposController.js');
const membrosController = require('./controllers/membrosController.js');
const mensagensController = require('./controllers/mensagensController.js');
const tarefasController = require('./controllers/tarefasController.js/tarefasController.js')
const userController = require('./controllers/userController.js')
// const tarefasController = require('./controllers/tarefasController.js');


const { inserir: inserirUsuario } = require('./services/UsuariosService.js');
const { inserir: inserirTipo } = require('./services/TipoService.js');
const { inserir: inserirCurso } = require('./services/CursosService.js');
const { inserir: inserirGrupo } = require('./services/GruposService.js');
const { inserir: inserirMembro } = require('./services/MembrosService.js');
const { inserir: inserirMensagem } = require('./services/MensagensService.js');
// const { inserir: inserirTarefa } = require('./services/tarefasService.js');



// router.get('/verify/:userEmail', userController.handleVerifyLogin);


router.get('/usuarios', usuariosController.buscarTodos);
router.get('/usuario/:id', usuariosController.buscarUm);
router.post('/usuario', usuariosController.inserir);

router.get('/tipos', tipoController.buscarTodos); 
router.get('/tipo/:id', tipoController.buscarUm); 
router.post('/tipo', tipoController.inserir); 

router.get('/cursos', cursosController.buscarTodos);
router.get('/cursos/:id', cursosController.buscarUm);
router.post('/curso', cursosController.inserir);
router.put('/curso/:id', cursosController.alterar);
router.delete('/curso/:id', cursosController.excluir);

router.get('/grupos', gruposController.buscarTodos);
router.get('/grupos/:id', gruposController.buscarUm);
router.post('/grupo', gruposController.inserir);
router.put('/grupo/:id', gruposController.alterar);
router.delete('/grupo/:id', gruposController.excluir);

router.get('/membros', membrosController.buscarTodos);
router.get('/membros/:id', membrosController.buscarUm);
router.post('/membro', membrosController.inserir);
router.put('/membro/:id', membrosController.alterar);
router.delete('/membro/:id', membrosController.excluir);

router.get('/mensagens', mensagensController.buscarTodos);
router.get('/mensagens/:id', mensagensController.buscarUm);
router.post('/mensagem', mensagensController.inserir);
router.put('/mensagem/:id', mensagensController.alterar);
router.delete('/mensagem/:id', mensagensController.excluir);

router.get('/tarefas', tarefasController.buscarTodos);
router.get('/tarefas/:id', tarefasController.buscarUm);
router.post('/tarefa', tarefasController.inserir);
router.put('/tarefa/:id', tarefasController.alterar);
router.delete('/tarefa/:id', tarefasController.excluir);

routes.use("/user", userController)

module.exports = router;
module.exports = routes;
