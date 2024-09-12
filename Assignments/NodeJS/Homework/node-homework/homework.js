const express = require("express");

const app = express();

app.use(express.json());

const phones = [
    { id: 1, item: "iPhone 14 Pro", price: 1099.99 },
    { id: 2, item: "Samsung Galaxy S23", price: 999.99 },
    { id: 3, item: "Google Pixel 8", price: 899.99 },
    { id: 4, item: "OnePlus 11", price: 799.99 },
    { id: 5, item: "Sony Xperia 1 IV", price: 1199.99 }
];

app.get("/products", (req, res) => {
    res.status(200);
    res.json(phones);
});

app.post("/products", (req, res) => {
    const { item, price } = req.body;

    if (!item || !price) {
        return res.status(400).json({ message: "Item and price are required" });
    }

    const newProduct = {
        id: phones.length + 1,
        item,
        price,
    };

    phones.push(newProduct);

    res.status(201);
    res.json({
        message: "Product added",
        product: newProduct,
    });
});

app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const product = phones.find((laptop) => laptop.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200);
    res.json(product);
});

app.put("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const { item, price } = req.body;

    const productIndex = phones.findIndex((laptop) => laptop.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (item !== undefined) {
        phones[productIndex].item = item;
    }
    if (price !== undefined) {
        phones[productIndex].price = price;
    }

    res.status(200);
    res.json({
        message: "Product updated",
        product: phones[productIndex],
    });
});

app.delete("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = phones.findIndex((laptop) => laptop.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    phones.splice(productIndex, 1);

    res.status(200);
    res.json({ message: "Product deleted" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
