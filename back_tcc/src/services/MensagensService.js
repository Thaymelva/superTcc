const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM tbl_mensagens', (error, results) => {
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
            db.query('SELECT * FROM tbl_mensagens WHERE id = ?', [id], (error, results) => {
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

    inserir: (remetente_id, grupo_id, conteudo_mensagem) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO tbl_mensagens (remetente_id, grupo_id, conteudo_mensagem) VALUES (?, ?, ?)',
                [remetente_id, grupo_id, conteudo_mensagem],
                (error, results) => {
                    if (error) {
                        rejeitado(error);
                        return;
                    }
                    aceito(results.insertId);
                });
        });
    },

    alterar: (id, remetente_id, grupo_id, conteudo_mensagem) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE tbl_mensagens SET remetente_id = ?, grupo_id = ?, conteudo_mensagem = ? WHERE id = ?',
                [remetente_id, grupo_id, conteudo_mensagem, id],
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
            db.query('DELETE FROM tbl_mensagens WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
};
