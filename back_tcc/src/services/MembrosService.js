const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM tbl_membros', (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM tbl_membros WHERE id = ?', [id], (error, results) => {
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

    inserir: (usuario_id, grupo_id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO tbl_membros (usuario_id, grupo_id) VALUES (?, ?)',
                [usuario_id, grupo_id],
                (error, results) => {
                    if (error) {
                        rejeitado(error);
                        return;
                    }
                    aceito(results.insertId);
                });
        });
    },

    alterar: (id, usuario_id, grupo_id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE tbl_membros SET usuario_id = ?, grupo_id = ? WHERE id = ?',
                [usuario_id, grupo_id, id],
                (error, results) => {
                    if (error) {
                        rejeitado(error);
                        return;
                    }
                    aceito(results);
                });
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM tbl_membros WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
};
