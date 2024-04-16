const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_tipo_usuario', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM tbl_tipo_usuario WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (usuario_id, tipos) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO tbl_tipo_usuario (usuario_id, tipos) VALUES (?, ?)',
                [usuario_id, tipos],
                (error, results) => {
                    if (error) {
                        rejeitado(error);
                        return;
                    }
                    aceito(results.insertId);
                });
        });
    },
    alterar: (id, usuario_id, tipos) => {
        return new Promise((aceito, rejeitado) => {

            db.query('UPDATE tbl_tipo_usuario SET usuario_id = ?, tipos= ? WHERE id = ?',
                [usuario_id, tipos, id],
                (error, results) => {

                    if (error) { rejeitado(error); return; }
                    aceito(results);

                });
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM tbl_tipo_usuario WHERE id = ?', [id], (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }


};
