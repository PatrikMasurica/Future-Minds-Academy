const router = require('express').Router();
const db = require('../db')

let loggedInUsers = new Map()

router.post('/login', (req, res) => {
    if (req.headers.sessionid && loggedInUsers.get(req.headers.sessionid)) {
        return res.status(400).json({
            error: "You are already logged in"
        })
    }

    const username = req.body.username;
    const password = req.body.password

    db.users.find(u =>
    (
        u.username === username &&
        u.password === password
    ));

    if (!user) {
        res.status(401).json({
            error: 'Invalid Credentials'
        }).end()
        return;
    }

    const sessionid = generateSessionId(60);

    res.status(200).json(
        {
            sessionid: sessionid
        }
    )

    res.end()
});

function authenticate(req, res, next) {
    let sessionid = req.headers.sessionid;
    const user = loggedInUsers.get(sessionid);

    if (!sessionid || !user) {
        return res.status(401).json({
            error: "You are not logged in"
        }).end();
    }
    req.user = user;


}

router.get('/info', authenticate, (req, res) => {
    res.status(200).json({
        emri: req.user.firstName,
        mbiemri: req.user.lastName
    })
})

function generateSessionId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}




module.exports = router;