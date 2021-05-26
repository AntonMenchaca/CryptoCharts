const express = require('express');
const cors = require('cors');
let app = express();
var router = require('./routes.js');
const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../dist'));
app.use('/', router);




app.listen(PORT, function() {
  console.log(` listening on port ${process.env.PORT}`);
});
