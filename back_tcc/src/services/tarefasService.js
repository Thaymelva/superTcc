const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM tbl_tarefas_agenda', (error, results) => {
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
            db.query('SELECT * FROM tbl_tarefas_agenda WHERE id = ?', [id], (error, results) => {
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

    inserir: (usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO tbl_tarefas_agenda (usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida) VALUES (?, ?, ?, ?, ?, ?)',
                [usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida],
                (error, results) => {
                    if (error) {
                        rejeitado(error);
                        return;
                    }
                    aceito(results.insertId);
                });
        });
    },

    alterar: (id, usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE tbl_tarefas_agenda SET usuario_id = ?, grupo_id = ?, titulo_tarefa = ?, descricao_tarefa = ?, data_limite = ?, concluida = ? WHERE id = ?',
                [usuario_id, grupo_id, titulo_tarefa, descricao_tarefa, data_limite, concluida, id],
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
            db.query('DELETE FROM tbl_tarefas_agenda WHERE id = ?', [id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results);
            });
        });
    }
};
