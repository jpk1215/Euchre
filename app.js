var express = require('express');
var morgan = require('morgan');
var path = require('path');
var routes = require('./routes');

var app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'/public')));
app.use('/', routes);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('listening at http://%s:%s', host, port)
});