const express = require('express');
var app = express.Router();

var model = require('./model');

module.exports = app
    .get('/quotes', (req,res) => res.send(model.GetQuotes()))