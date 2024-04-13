const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'chave_secreta';

class UserService {
  async authenticate(email, password) {
    try {
      // Buscar usuário pelo email
      const user = await db.query('SELECT * FROM tbl_usuarios WHERE email = ?', [email]);

      // Verificar se o usuário existe
      if (user.length === 0) {
        return null; // Usuário não encontrado
      }

      // Verificar se a senha está correta usando bcrypt
      const passwordMatch = await bcrypt.compare(password, user[0].senha);
      if (!passwordMatch) {
        return null; // Senha incorreta
      }

      // Remover a senha do objeto de usuário antes de retornar
      delete user[0].senha;

      return {
        user: user[0],
        token: jwt.sign({ id: user[0].id }, secretKey, { expiresIn: '1h' }) // Gerar token JWT
      };
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      throw error; // Propagar o erro para ser tratado no controlador
    }
  }
}

module.exports = new UserService();

