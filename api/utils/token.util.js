const jwt = require("jsonwebtoken");

const maxAge = 30 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: maxAge,
  });
};

module.exports = { createToken, maxAge };
