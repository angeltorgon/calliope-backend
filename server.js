const express = require('express');
const helmet = require('helmet');
const cors = require("cors");

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const poemRoute = require('./routes/poem');

const server = express();


server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRoute);
server.use('/api/user', userRoute);
server.use('/api/poem', poemRoute);

server.get('/', (req, res) => {
    res.send("Welcome to Calliope");
})

module.exports = server;
