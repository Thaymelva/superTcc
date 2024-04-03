const db = require('../db.js');


module.exports = {
    buscarTodos: () =>{
        return new Promise ((aceito, rejeitado)=>{
            db.query('SELECT * FROM tbl_grupos', (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) =>{
            db.query('SELECT * FROM tbl_grupos WHERE id = ?', [id], (error, results) =>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome_grupo, codigo_convite, criador_id ) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO tbl_grupos (nome_grupo, codigo_convite, criador_id )  VALUES (?, ?, ?)', 
            [nome_grupo, codigo_convite, criador_id ], 
            (error, results) =>{

                if(error) {rejeitado(error); return;}
                aceito(results.insertId)

            });
        });
    },

    alterar: (id, nome_grupo, codigo_convite, criador_id) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE tbl_grupos SET nome_grupo = ?, codigo_convite = ?, criador_id WHERE id = ?', 
            [nome_grupo, codigo_convite, criador_id, id], 
            (error, results) =>{

                if(error) {rejeitado(error); return;}
                aceito(results);

            });
        });
    },

    excluir: (id) =>{
        return new Promise ((aceito, rejeitado)=>{
            db.query('DELETE FROM tbl_grupos WHERE id = ?',[id], (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }

}