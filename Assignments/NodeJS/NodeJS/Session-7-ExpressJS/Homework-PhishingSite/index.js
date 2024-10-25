const express = require('express');
const path = require('path');
const PORT = 8888;
const app = express();

const BASE_PATH = path.join(__dirname, 'public');

app.use('/static', express.static('public'));

app.get('/facebook', (req, res) => {

    res.sendFile(path.join(BASE_PATH, 'facebook.html'))

})



app.listen(PORT);