var express = require('express'),
	fs = require('fs');
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var content = fs.readFileSync(__dirname + 'index.html');
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
  console.log(content);
});
