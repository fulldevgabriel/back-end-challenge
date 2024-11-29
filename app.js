const express = require("express");
const app = express();

const rotaSignUp = require("./routes/signUp.js");

app.use(express.json());

app.use("/home", rotaSignUp);

module.exports = app;