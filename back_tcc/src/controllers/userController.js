const userService = require('../services/userService.js');

const authController = {
  handleLogin: async (req, res) => {
    try {
      const { email, senha } = req.body;

  
      const emailTest = await userService.checkEmailExists(email);

      if (emailTest.length > 0) {
        return res.status(401).json({ message: 'Email já cadastrado' });
      }

     
      const user = await userService.authenticate(email, senha);

      if (!user) {
        return res.status(401).json({ message: 'Email ou senha inválido.' });
      }

      
      return res.status(200).json({ message: 'Login feito com sucesso.' });
    } catch (error) {
      console.error('Erro durante o login:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
};

  handleVerifyLogin:




module.exports = authController;
