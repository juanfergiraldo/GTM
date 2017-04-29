
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendfile("views/index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gtm');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("we're connected!")});