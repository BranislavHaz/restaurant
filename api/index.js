const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const dbConnect = require("./config/db.config");
const corsConfig = require("./config/cors.config");

const authRoute = require("./routes/auth.route");
const menuRoute = require("./routes/menu.route");

const app = express();

require("dotenv").config();
dbConnect();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/menu", menuRoute);

app.listen(8888, (err) => {
  err ? console.log(err) : console.log("App is running!");
});
