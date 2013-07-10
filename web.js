var express = require('express'),
	fs = require('fs');
var app = express.createServer(express.logger());
var content = fs.readFileSync(__dirname + 'index.html');
var buffer = new Buffer(content);


app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
  // console.log(content);
});
