const jwt = require('jsonwebtoken');
const userService = require('../services/UserService');
const bcrypt = require('bcrypt'); // Adicionando o bcrypt para hash de senhas

const secretKey = process.env.JWT_SECRET || 'chave_secreta'; // Usando variável de ambiente para a chave secreta ou uma chave padrão

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    // Validando entrada
    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    try {
      const user = await userService.authenticate(email, password);

      // Verificando se o usuário existe e a senha está correta
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      console.error('Erro durante o login:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

module.exports = new AuthController();
