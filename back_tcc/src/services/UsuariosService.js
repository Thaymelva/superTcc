const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_usuarios', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },
    buscarUm: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_usuarios WHERE id = ?', [id], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        resolve(results[0]);
                    } else {
                        resolve(false);
                    }
                }
            });
        });
    },
    inserir: (nome, email, celular, senha, curso, tipoUsuario) => {
        return new Promise((resolve, reject) => {
            db.beginTransaction((err) => {
                if (err) {
                    reject(err);
                    return;
                }
                db.query('INSERT INTO tbl_usuarios (nome, email, celular, senha) VALUES (?, ?, ?, ?)',
                    [nome, email, celular, senha],
                    (error, results) => {
                        if (error) {
                            db.rollback(() => {
                                reject(error);
                            });
                            return;
                        }
                        const usuarioId = results.insertId;
                        db.query('INSERT INTO tbl_cursos (nome_curso, aluno_id) VALUES (?, ?)',
                            [curso, usuarioId],
                            (error, results) => {
                                if (error) {
                                    db.rollback(() => {
                                        reject(error);
                                    });
                                    return;
                                }
                                db.query('INSERT INTO tbl_tipo_usuario (usuario_id, tipos) VALUES (?, ?)',
                                    [usuarioId, tipoUsuario],
                                    (error, results) => {
                                        if (error) {
                                            db.rollback(() => {
                                                reject(error);
                                            });
                                            return;
                                        }
                                        db.commit((err) => {
                                            if (err) {
                                                db.rollback(() => {
                                                    reject(err);
                                                });
                                                return;
                                            }
                                            resolve(usuarioId);
                                        });
                                    });
                            });
                    });
            });
        });
    }
};
