const isAuthenticated = require("../middlewares/auth.middleware");
const router = require("express").Router();

const Menu = require("../models/menu.model");

router.post("/add", isAuthenticated, (req, res) => {
  const data = req.body;
  data.map(async (el) => {
    const { unix, type, order, value } = el;

    await Menu.findOneAndUpdate(
      { unix, type, order },
      { value },
      { upsert: true }
    );
  });
  res.status(201).json({ status: true });
});

router.get("/get", async (req, res) => {
  const { min, max } = req.query;
  const menu = await Menu.find({ unix: { $gte: min, $lte: max } });

  menu ? res.json(menu) : res.json([]);
});

module.exports = router;
