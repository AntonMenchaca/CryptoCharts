const express = require("express");
const cors = require("cors");
let app = express();
var router = require("./routes.js");
const path = require("path");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/../dist"));
app.use("/", router);

app.listen(3000, function () {
  console.log(` listening on port 3000`);
});
