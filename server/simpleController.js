const express = require('express');
var app = express.Router();

module.exports = app
    .use(function(req, res, next){
        res.write("first anon function.\r\n");
        next();
    })
    // respond with "hello world" when a GET request is made to the homepage
    .get('/hello', function (req, res) {
        res.write('hello world');
        res.end();
    })
    .get('/goodbye', function (req, res) {
        res.write('goodbye world');
        res.end();
    })
    .get('/', function (req, res) {
        res.write('root whatever');
        res.end();
    }) //note: no ; for some reason...