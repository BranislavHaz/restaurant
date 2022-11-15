const mongoose = require("mongoose");

const dbConnect = () =>
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "antunovic",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB is connected!"))
    .catch((err) => console.log(err.message));

module.exports = dbConnect;
