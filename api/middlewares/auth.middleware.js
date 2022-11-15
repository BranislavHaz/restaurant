const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const isAuthenticated = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_KEY, async (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: "Nebolo Vás možné overiť, prihláste sa prosím.",
          isAuth: false,
        });
      } else {
        const user = await User.findById(decodedToken.id);

        if (user) {
          next();
        } else {
          res.status(401).json({ isAuth: false });
        }
      }
    });
    next();
  } else {
    res.status(401).json({
      message: "Nebolo Vás možné overiť, prihláste sa prosím.",
      isAuth: false,
    });
  }
};

module.exports = isAuthenticated;
