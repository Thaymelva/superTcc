const jwt = require('jsonwebtoken');
const userService = require('../services/UserService');

const secretKey = 'chave_secreta';

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await userService.authenticate(email, password);
      if (!user) {
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
