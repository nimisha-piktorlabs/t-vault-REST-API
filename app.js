//import express
const express = require("express");
//execute express
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middle ware
app.use(cors());

app.use(bodyParser.json());

//import routes
const safeRoute = require("./routes/safe");
//middlewear
app.use("/safe", safeRoute, () => {
  console.log("this is middle ware");
});
//route
app.get("/", (req, res) => {
  res.send("we are on home ");
});

//concet db
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to db!!!!!!")
);
//listen
const port = process.env.PORT || 8000;
app.listen(port);
