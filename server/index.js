const express = require('express');
const cors = require('cors');
let app = express();
var router = require('./routes.js');
const dotenv = require('dotenv').config();
let PORT = process.env.Port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../dist'));
app.use('/', router);




app.listen(PORT, function() {
  console.log(` listening on port 3000`);
});
