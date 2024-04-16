const db = require('../db.js');

module.exports = {
    handleLogin: (email, password) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO tbl_usuario (email, password) VALUES (?, ?)',
                [email, password],
                (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results);
                }
            )
        })
    },

    handleVerifyLogin: async (req, res) => {
        try {
            const { userEmail } = req.params;
            const verifyTest = await UsuariosService.handleVerifyLogin(userEmail);

            if (verifyTest.length < 1) {
                return res.status(200).send({ message: 'Email não cadastrado.' });
            } else {
                return res.status(401).send({ message: 'Email já cadastrado.' });
            }
        } catch (error) {
            return res.status(500).send({ message: `Erro ao buscar os dados. ${error}` });
        }
    }
};
