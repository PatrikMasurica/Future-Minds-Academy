const express = require('express');
const db = require('./db.js')
const app = express();

app.use(express.json())//na bon tgatshme jsonin

const PAGE_SIZE = 10;

app.get('/products', (req, res) => {

    let page = Math.max(parseInt(req.query.page) || 1, 1);



    const products = db.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (products.length === 0) {
        res.status(404);
        res.end();
    } else {
        res.json(products)
    }
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = db.products.find(p => p.id === id)

    if (!product) {
        res.status(404);
        res.end();
        return;
    }
    product.supplier = db.suppliers.find(s => s.id == product.supplierID);

    res.json(product);

})

app.get('/suppliers/:id/products', (req, res) => {
    const id = req.params.id;
    const products = db.products.filter(p => p.supplierID == id);
    res.json(products);

})

app.listen(8585);