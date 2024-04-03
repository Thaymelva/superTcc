const MensagensService = require('../services/MensagensService.js');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };

        let mensagens = await MensagensService.buscarTodos();

        for (let i in mensagens) {
            json.result.push({
                id: mensagens[i].id,
                remetente_id: mensagens[i].remetente_id,
                grupo_id: mensagens[i].grupo_id,
                conteudo_mensagem: mensagens[i].conteudo_mensagem,
                data_envio: mensagens[i].data_envio
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let mensagem = await MensagensService.buscarUm(id);

        if (mensagem) {
            json.result = mensagem;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        let remetenteId = req.body.remetente_id;
        let grupoId = req.body.grupo_id;
        let conteudoMensagem = req.body.conteudo_mensagem;

        if (remetenteId && grupoId && conteudoMensagem) {
            let mensagemId = await MensagensService.inserir(remetenteId, grupoId, conteudoMensagem);
            json.result = {
                id: mensagemId,
                remetente_id: remetenteId,
                grupo_id: grupoId,
                conteudo_mensagem: conteudoMensagem
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} };

        let id = req.params.id;
        let remetenteId = req.body.remetente_id;
        let grupoId = req.body.grupo_id;
        let conteudoMensagem = req.body.conteudo_mensagem;

        if (id && remetenteId && grupoId && conteudoMensagem) {
            let mensagemId = await MensagensService.alterar(id, remetenteId, grupoId, conteudoMensagem);
            json.result = {
                id: mensagemId,
                remetente_id: remetenteId,
                grupo_id: grupoId,
                conteudo_mensagem: conteudoMensagem
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async (req, res) => {
        let json = { error: '', result: {} };

        await MensagensService.excluir(req.params.id);

        res.json(json);
    }
};
