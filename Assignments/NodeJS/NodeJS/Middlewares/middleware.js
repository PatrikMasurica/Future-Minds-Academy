

exports.methodMiddleware = (req, res, next) => {
    console.log(req.method);
    next();
}

exports.urlMiddleware = (req, res, next) => {
    console.log(req.url);
    next();
}