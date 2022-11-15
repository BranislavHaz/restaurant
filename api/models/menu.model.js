const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  unix: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  value: {
    type: String,
  },
});

module.exports = mongoose.model("Menu", menuSchema);
