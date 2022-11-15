const router = require("express").Router();
const { createToken, maxAge } = require("../utils/token.util");

const User = require("../models/user.model");

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  const token = createToken(user._id);

  res.cookie("jwt", token, {
    withCredentials: true,
    httpOnly: false,
    maxAge,
  });

  res.status(201).json({ user: user._id });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);

    res.cookie("jwt", token, { httpOnly: false, maxAge });

    res
      .status(201)
      .json({ message: "Boli ste úspešne prihlásený!", isAuth: true });
  } catch (err) {
    res.json({ message: err.message, isAuth: false });
  }
});

router.get("/isAuth", async (req, res) => {
  const token = req.cookies.jwt;

  if (token) {
    res
      .status(201)
      .json({ message: "Boli ste úspešne overený!", isAuth: true });
  } else {
    res.json({
      message: "Pre pokračovanie sa prosím prihláste!",
      isAuth: false,
    });
  }
});

module.exports = router;
