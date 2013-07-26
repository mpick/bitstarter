var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var content = fs.readFileSync( 'index.html');
// var buffer = new Buffer(content);


app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
  // console.log(content);
});
