const express = require('express');
const Game = require('./model');

var app = express.Router();

var game = new Game();

module.exports = app
    .get('/quotes', (req,res) => res.send(game.GetQuotes(req.query.PlayerID)) )
    .get('/state', (req,res) => res.send(game) )
    .post('/picture',(req,res) => res.send(game.FlipPicture()) )
    .post('/quotes',(req,res) =>{
        game.SubmitQuote(req.body.Text,req.body.PlayerID);
        res.send({success:true});
    })