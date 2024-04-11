const db = require('../db'); 

class UserService {
  async authenticate(email, password) {

    const user = await db.query('SELECT * FROM tbl_usuarios WHERE email = ? AND senha = ?', [email, password]);

    if (user.length === 0) {
      return null; 
    }

    return user[0];
  }
}

module.exports = new UserService();
