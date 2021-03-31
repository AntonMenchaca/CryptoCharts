const express = require('express');
const cors = require('cors');
let app = express();
var router = require('./routes.js');


app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/../dist'));
app.use('/', router);

var PORT = 3000;


app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
