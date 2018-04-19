<<<<<<< HEAD
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
=======
var express = require('express');
var Game = require('./model');

var app = express.Router();


var game = new Game();

module.exports = app
    .get('/quotes', (req, res) =>
     res.send( game.GetQuotes(req.query.playerId) ) 
    )
    .get('/state', (req, res) => res.send(game))
    .post('/picture', (req, res) => res.send( game.FlipPicture() ))
    .post('/quotes', (req, res) => {
        console.log(req.body);
        
        game.SubmitQuote(req.body.Text, req.body.PlayerId);
        res.send( { success: true } );
    })


>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
