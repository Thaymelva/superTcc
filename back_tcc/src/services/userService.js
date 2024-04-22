const database = require("../db");
require("mysql2/promise");

async function login(email, password) {
  const sql = "SELECT * FROM tbl_usuarios WHERE email = ? AND senha = ?";
  const dataLogin = [email, password];

  try {
    const connection = await database.connect();
    const [rows] = await connection.promise().query(sql, dataLogin);
    console.log("Linhas retornadas: ", rows);
    connection.end();
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { login };
