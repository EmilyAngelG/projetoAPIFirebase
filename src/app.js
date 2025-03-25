const express = require("express");
require("dotenv").config();
const cadastroRoutes = require("./routes/cadastroRoutes");

const app = express();
app.use(express.json());

app.use("/api/cadastros", cadastroRoutes);

module.exports = app;
