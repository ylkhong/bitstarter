var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(30);

var fs = require('fs');

var text = fs.readFileSync('index.html','');

buffer = text;

app.get('/', function(request, response) {
  response.send(buffer.toString("utf8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
