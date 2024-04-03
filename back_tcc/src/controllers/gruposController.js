const GruposService = require('../services/GruposService.js');


module.exports = {
    buscarTodos: async (req, res) =>{
        let json = {error:'', result: []};

        let grupos = await GruposService.buscarTodos();

        for(let i in grupos){
            json.result.push({
                id: grupos[i].id,
                nome_grupo: grupos[i].nome_grupo,
                codigo_convite: grupos[i].codigo_convite,
                criador_id: grupos[i].criador_id,
            });
        }
        res.json(json);
        
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let grupo = await GruposService.buscarUm(id);

        if(grupo){
            json.result = grupo;
        }
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome_grupo = req.body.nome_grupo;
        let codigo_convite = req.body.codigo_convite;
        let criador_id= req.body.criador_id;

        if(nome_grupo && codigo_convite && criador_id ){
            let GrupoId = await GruposService.inserir(nome_grupo, codigo_convite, criador_id);
            json.result ={
                id: GrupoId,
                codigo_convite,
                criador_id
            };

        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome_grupo = req.body.nome_grupo;
        let codigo_convite= req.body.codigo_convite;
        let criador_id= req.body.criador_id;

        if(id && nome_grupo && codigo_convite && criador_id){
            let grupoId = await GruposService.alterar(id, nome_grupo, codigo_convite, criador_id);
            json.result ={
                GrupoId,
                nome_grupo,
                codigo_convite,
                criador_id
            };

        }else{
            json.error = 'Campos não enviados'
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await GruposService.excluir(req.params.id);

        res.json(json);
    }

}