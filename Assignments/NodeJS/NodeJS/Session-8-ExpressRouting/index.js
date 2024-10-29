const express = require('express');
const productController = require('./controllers/productControllers');
const calculatorController = require('./controllers/calculatorController');


const app = express();

app.use('/products', productController);

app.use('/calculator', calculatorController);

app.listen(8585);