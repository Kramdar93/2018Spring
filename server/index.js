const express = require('express');
var app = express();

app.use(function(req, res, next){
    res.write("first anon function.\r\n");
    next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function (req, res) {
    res.write('hello world');
    res.end();
  });

app.get('/goodbye', function (req, res) {
    res.write('goodbye world');
    res.end();
  });

app.listen(8080);