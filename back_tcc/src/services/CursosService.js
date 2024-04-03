const db = require('../db.js');

module.exports = {
    buscarTodos: () =>{
        return new Promise ((aceito, rejeitado)=>{
            db.query('SELECT * FROM tbl_cursos', (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM tbl_cursos WHERE id = ?', [id], (error, results) =>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome_curso, aluno_id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO tbl_cursos (nome_curso, aluno_id)  VALUES (?, ?)', 
            [nome_curso, aluno_id], 
            (error, results) =>{

                if(error) {rejeitado(error); return;}
                aceito(results.insertId)

            });
        });
    },

    alterar: (id, nome_curso, aluno_id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE tbl_cursos SET nome_curso = ?, aluno_id = ? WHERE id = ?', 
            [nome_curso, aluno_id, id], 
            (error, results) =>{

                if(error) {rejeitado(error); return;}
                aceito(results);

            });
        });
    },

    excluir: (id) =>{
        return new Promise ((aceito, rejeitado)=>{
            db.query('DELETE FROM tbl_cursos WHERE id = ?',[id], (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }

};