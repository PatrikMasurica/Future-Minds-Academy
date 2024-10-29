const router = require('express').Router();

router.get('/', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const operation = req.query.operation;

    let result;

    switch (operation) {

        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':

            if (b === 0) {
                return res.status(400).json({ errr: 'Invalid Operation' });

            }

            result = a / b;
            break;

        default:
            return res.status(400).json({ error: 'Invalin Operation' });

    }


    res.json({
        a: a,
        b: b,
        operation: operation,
        result: result
    })


})


router.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (!a || !b) {
        res.status(400).json({
            error: 'Please provide valid parameters'
        })
    }

    const result = a + b;

    res.json({
        a: a,
        b: b,
        operation: 'add',
        result: result
    })

    res.writeHead(200, `Result is ${a + b}`);
    res.end();
});

router.get('/subtract', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);


    if (!a || !b) {
        res.status(400).json({
            error: 'Please provide valid parameters'
        })
    }

    const result = a - b;

    res.json({
        a: a,
        b: b,
        operation: 'subtract',
        result: result
    })

    res.writeHead(200, `Result is ${a - b}`);
    res.end();
});

router.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);


    if (!a || !b) {
        res.status(400).json({
            error: 'Please provide valid parameters'
        })
    }

    const result = a * b;

    res.json({
        a: a,
        b: b,
        operation: 'multiply',
        result: result
    })

    res.writeHead(200, `Result is ${a * b}`);
    res.end();
});

router.get('/divide', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if (b === 0) {
        return res.status(400).json({ message: 'Cannot divide by 0' });
    }

    const result = a / b;

    res.json({
        a: a,
        b: b,
        operation: 'divide',
        result: result
    })

    res.writeHead(200, `Result is ${a / b}`);
    res.end();
});




module.exports = router;