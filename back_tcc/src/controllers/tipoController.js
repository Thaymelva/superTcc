const TipoService = require('../services/TipoService.js');

module.exports = {
    buscarTodos: async (req, res) => {
        let json ={error:'', result:[]};
        let tipos = await TipoService.buscarTodos();

        for (let i in tipos){
            json.result.push({
                id : tipos[i].id,
                usuario_id : tipos[i].usuario,
                tipo: tipos[i].tipos
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json ={error:'', result:{}};

        let id = req.params.id;
        let tipo = await TipoService.buscarUm(id);

        if(tipo){
            json.result = tipo;
        }
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let usuario_id= req.body.usuario_id;
        let tipos = req.body.tipos;

        if(usuario_id && tipos ){
            let CursoId = await TipoService.inserir(usuario_id, tipos );
            json.result ={
                id: CursoId,
                usuario_id,
                tipos
            };

        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let usuario_id = req.body.usuario_id;
        let tipos = req.body.tipos;

        if(id && usuario_id && tipos){
            let TipoId = await TipoService.alterar(id, usuario_id, tipos);
            json.result ={
                TipoId,
                usuario_id,
                tipo
            };

        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await TipoService.excluir(req.params.id);

        res.json(json);
    }

};
