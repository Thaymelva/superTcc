require('dotenv').config({ path: '.env' });
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');



const server = express();
server.use(express.json())
server.use(cors());
server.use('/api', routes);


server.listen(process.env.PORT, () =>{
    console.log(`servidor rodando em: http://localhost:${process.env.PORT}`);
})