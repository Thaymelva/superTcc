const express = require("express");
const userService = require("../services/userService.js");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    await userService.login(email, password);
    return res.status(200).send({ message: "Login efetuado" });
  } catch (err) {
    console.log(`Erro no login: ${err}`);
    res.status(500).send({ error: "Erro interno do servidor" });
  }
});

router.get("/tarefas/:usuarioId", async (req, res) => {
  const { usuarioId } = req.params;
  
  try {
    const tasks = await userService.getTasksByUserId(usuarioId);
    res.status(200).send({ tasks });
  } catch (error) {
    console.log(`Erro ao buscar tarefas do usuário: ${error}`);
    res.status(500).send({ error: "Erro interno do servidor" });
  }
});

module.exports = router;
