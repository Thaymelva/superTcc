const CursosService = require('../services/CursosService.js');

module.exports = {
    buscarTodos: async (req, res) =>{
        let json = {error:'', result: []};

        let cursos = await CursosService.buscarTodos();

        for(let i in cursos){
            json.result.push({
                id: cursos[i].id,
                nome_curso: cursos[i].nome_curso,
                aluno_id: cursos[i].aluno_id
            });
        }
        res.json(json);
    },
        buscarUm: async(req, res) => {
            let json = {error:'', result:{}};

            let id = req.params.id;
            let curso = await CursosService.buscarUm(id);

            if(curso){
                json.result = curso;
            }
            res.json(json);
        },

        inserir: async(req, res) => {
            let json = {error:'', result:{}};

            let nomeCurso = req.body.nome_curso;
            let alunoId = req.body.aluno_id;

            if(nomeCurso && alunoId){
                let CursoId = await CursosService.inserir(nomeCurso, alunoId);
                json.result ={
                    id: CursoId,
                    nomeCurso,
                    alunoId
                };

            }else{
                json.error = 'Campos não enviados'
            }

            res.json(json);
        },

        alterar: async(req, res) => {
            let json = {error:'', result:{}};

            let id = req.params.id;
            let nomeCurso = req.body.nome_curso;
            let alunoId = req.body.aluno_id;

            if(id && nomeCurso && alunoId){
                let CursoId = await CursosService.alterar(id, nomeCurso, alunoId);
                json.result ={
                    CursoId,
                    nomeCurso,
                    alunoId
                };

            }else{
                json.error = 'Campos não enviados'
            }

            res.json(json);
        },

        excluir: async(req, res) => {
            let json = {error:'', result:{}};

            await CursosService.excluir(req.params.id);

            res.json(json);
        }
}