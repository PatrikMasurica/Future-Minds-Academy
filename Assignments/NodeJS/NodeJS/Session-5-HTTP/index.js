const http = require('http');
const fs = require('fs').promises;
const path = require('path');


const server = http.createServer((req, res) => {
    res.write('Hello from Patrick');
    res.end();

})


server.listen(8585);
