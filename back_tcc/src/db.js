const mysql2 = require("mysql2");

async function connect() {
  try {
    const connection = await mysql2.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306
    });

    console.log("Conexão bem-sucedida!"); 

    return connection;
  } catch (error) {
    throw error;
  }
}

module.exports = { mysql2, connect };
