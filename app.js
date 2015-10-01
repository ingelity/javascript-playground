// var http = require('http');
// var server = http.createServer(function(req, res) {
//   res.end('Hi!\n');
// });
// server.listen(1337);
// console.log('node.js server started');

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.render('index');
});

app.set('views', './server/views');
app.set('view engine', 'ejs');
app.use('/assets', express.static('server/assets'));

var server = app.listen(3000, function() {
  console.log('express server started');
});

require('./webpackDevServer');
