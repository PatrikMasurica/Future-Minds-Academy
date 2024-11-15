const authController = require("../controllers/authController");
const userRepository = require("../repositories/userRepository");

exports.authenticate = (req, res, next) => {
  const token = req.headers["Token"];

  if (!token) {
    return res.status(401).json({
      succes: false,
      error: "You dont have acces to this endpoint",
    });
  }

  const userId = authController.tokens.get(token);

  if (!userId) {
    return res.status(401).json({
      succes: false,
      error: "You dont have acces to this endpoint",
    });
  }
};
