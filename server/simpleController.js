<<<<<<< HEAD
const express = require('express');
=======
var express = require('express')
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
var app = express.Router();

module.exports = app
    .use(function(req, res, next){
<<<<<<< HEAD
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
=======
        res.write('This is provided by Moshe Plotkin at newpaltz.edu\r\n');
        next();
    })
    .get('/hello', function (req, res) {
        res.write('World');
        res.end();
    })
    .get('/goodbey', function (req, res) {
        res.write('New Paltz');
        res.end();
    })
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
