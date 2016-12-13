var http = require('http');
var path = require('path');
var lessMiddleware = require('less-middleware');

var express = require('express');


var app = express();
var server = http.createServer(app);

app.use(lessMiddleware(__dirname + '/client', {
  dest: __dirname + '/client'
}));
app.use(express.static(__dirname + '/client'));
app.use(express.static(path.resolve(__dirname, 'client')));

console.log('Booting up the server! Please wait until finished...')
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("All ready! Server listening at", addr.address + ":" + addr.port);
});
