var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(30);

var fs = require('fs');

var text = fs.readFileSync('index.html',);
console.log(text);
 
app.get('/', function(request, response) {
  response.send('hello world again');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
