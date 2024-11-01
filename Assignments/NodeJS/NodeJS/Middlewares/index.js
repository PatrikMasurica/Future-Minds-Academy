const express = require('express');
const { methodMiddleware, urlMiddleware } = require('./middleware');



const app = express();
app.use(express.json());
app.use(methodMiddleware);
app.use(urlMiddleware);

app.get('/', (req, res) => {
    console.log('Hello world');
    res.end();
})



app.listen(8585)