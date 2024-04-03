const UsuariosService = require('../services/UsuariosService.js');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        try {
            let usuarios = await UsuariosService.buscarTodos();

            for (let i in usuarios) {
                json.result.push({
                    id: usuarios[i].id,
                    nome: usuarios[i].nome,
                    email: usuarios[i].email,
                    senha: usuarios[i].senha,
                    tipoUsuario: usuarios[i].tipoUsuario
                });
            }

            res.json(json);
        } catch (error) {
            json.error = 'Erro ao buscar usuários';
            res.status(500).json(json);
        }
    },
    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let id = req.params.id;
            let usuario = await UsuariosService.buscarUm(id);

            if (usuario) {
                json.result = usuario;
            }
            res.json(json);
        } catch (error) {
            json.error = 'Erro ao buscar usuário';
            res.status(500).json(json);
        }
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        try {
            let { name, email, celular, password, curso, funcao } = req.body;

            if (name && email && celular && password && curso && funcao) {
                let usuarioId = await UsuariosService.inserir(name, email, celular, password, curso, funcao);
                json.result = {
                    id: usuarioId,
                    nome: name,
                    email,
                    celular,
                    senha: password,
                    curso,
                    funcao
                };
            } else {
                console.log('Erro ao inserir usuário: Campos não enviados');
                json.error = 'Campos não enviados';

            }
            

            res.json(json);
        } catch  {
            console.error('Erro ao inserir usuário:', error)
            json.error = error.message;
            res.status(500).json(json);
        }
    }
};
