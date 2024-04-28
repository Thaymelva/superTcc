const database = require("../db");
require("mysql2/promise");

async function login(email, password) {
  const sql = "SELECT * FROM tbl_usuarios WHERE email = ? AND senha = ?";
  const dataLogin = [email, password];

  try {
    const connection = await database.connect();
    const [rows] = await connection.promise().query(sql, dataLogin);
    connection.end();
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getTasksByUserId(usuario_id) {
  const sql = "SELECT * FROM tbl_tarefas_agenda WHERE usuario_id = ?";
  const data = [usuario_id];

  try {
    const connection = await database.connect();
    const [rows] = await connection.promise().query(sql, data);
    connection.end();
    console.log(data);
    console.log("Linhas retornadas: ", rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = { login, getTasksByUserId };
