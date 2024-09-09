const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const pathname = parseUrl.pathname;

    const menuu = [
        {
            id: 1, name: "First Restaurant",
            menu: {
                firstFood: 'Hamburger',
                secondFood: 'Pizza'
            }
        },
        {
            id: 2, name: "Second Restaurant",
            menu: {
                firstFood: 'Pasul',
                secondFood: 'Ajvar'
            }
        },
    ];

    if (req.method === "GET" && pathname == "/api/menuu") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Get Restaurant Menu", menuu }));
    } else if (req.method === "POST" && pathname === "/api/menuu") {
        console.log("Body", req);
        res.statusCode = 201;

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Create a new user" }));
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});

server.listen(4000, () => {
    console.log("Server running at http://localhost:4000/");
});


// give me a simple server that can get a restaurant meny 
