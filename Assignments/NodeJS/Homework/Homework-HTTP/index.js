const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const server = http.createServer(async (req, res) => {
    if (req.url === '/teksti.txt') {
        try {
            const data = await fs.readFile(path.join(__dirname, 'teksti.txt'), 'utf8');
            res.setHeader('Content-Type', 'text/plain');
            res.writeHead(200);
            res.end(data);
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file.');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(8585, () => {
    console.log('Server running on port 8585');
});
