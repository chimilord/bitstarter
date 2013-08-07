var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var data;

app.get('/', function(request, response) {
  data = fs.readFileSync('index.html');
  var buffer = new Buffer(data);
  console.log(buffer.toString());
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
