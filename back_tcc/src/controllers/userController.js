const express = require("express");
const userService = require("../services/userService.js");

const router = express.Router();

module.exports = router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    await userService.login(email, password);
    return res.status(200).send({ message: "Login efetuado" });
  } catch (err) {
    console.log(`Erro no login: ${err}`);
  }
});
