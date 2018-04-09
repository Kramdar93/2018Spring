const express = require('express');
var app = express();

const serverName = "localhost";
const port = 8080;

const simple = require('./simpleController');
const game = require('./game/controller');

app
    .use("/",(req,res,next)=>{
        //middleware to allow passing more data
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","*");
        res.header("Access-Control-Allow-Headers","*");
        next();
    })
    .use("/simple",simple)
    .use("/game",game)
    .listen(port)

console.log("web server running on http://" + serverName + ":" + port +"/simple");
console.log("game server running on http://" + serverName + ":" + port +"/game");