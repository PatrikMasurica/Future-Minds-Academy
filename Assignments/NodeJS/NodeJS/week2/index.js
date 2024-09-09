const http = require('http');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html')

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error loading file');
            return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");

        res.end(content);
    })
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // if (req.method === "GET") {
    //     res.statusCode = 200;
    //     res.end('GET request recieved!')
    // } else if (req.method === "POST") {
    //     res.statusCode = 200;
    //     res.end('POST request recieved!')
    //     res.end('Hello, World!\n');
    // } else {
    //     res.statusCode = 404;
    //     res.end('Not Found!!!!')
    // }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

