var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3003, function() {
  console.log('listening on port 3003!');
});

