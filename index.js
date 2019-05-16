require('dotenv').config();
const server = require('./server');

server.listen(4000, () => {
    console.log('*** Listening on Port 4000 ***');
})