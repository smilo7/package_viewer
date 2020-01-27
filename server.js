//set up express
var express = require('express');
var app = express();

// Set up the server to listen on port 3000
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://' + host + ':' + port);
}

//serve up files in the public folder
app.use(express.static('public'));
