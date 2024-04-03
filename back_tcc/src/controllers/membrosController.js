const MembrosService = require('../services/MembrosService.js');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        let membros = await MembrosService.buscarTodos();

        for (let i in membros) {
            json.result.push({
                id: membros[i].id,
                usuario_id: membros[i].usuario_id,
                grupo_id: membros[i].grupo_id
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let membro = await MembrosService.buscarUm(id);

        if (membro) {
            json.result = membro;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        let usuarioId = req.body.usuario_id;
        let grupoId = req.body.grupo_id;

        if (usuarioId && grupoId) {
            let membroId = await MembrosService.inserir(usuarioId, grupoId);
            json.result = {
                id: membroId,
                usuario_id: usuarioId,
                grupo_id: grupoId
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let usuarioId = req.body.usuario_id;
        let grupoId = req.body.grupo_id;

        if (id && usuarioId && grupoId) {
            let membroId = await MembrosService.alterar(id, usuarioId, grupoId);
            json.result = {
                id: membroId,
                usuario_id: usuarioId,
                grupo_id: grupoId
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async (req, res) => {
        let json = { error: '', result: {} };

        await MembrosService.excluir(req.params.id);

        res.json(json);
    }
};
