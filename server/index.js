const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const simple = require('./simpleController');
const game = require('./game/controller');

const app = express();

const serverName = "localhost";
const port = 8080;


app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:false}))
    .use("/", (req,res,next)=>{
        //middleware to allow passing more data
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","*");
        res.header("Access-Control-Allow-Headers","*");
        next();
    })
    .use("/", express.static( path.join(__dirname,"../dist/") ))
    .use("/simple",simple)
    .use("/game",game)
    .use("/", (req,res,next)=>{
        res.sendFile(path.join(__dirname,"../dist/")); //if we've found nothing else, go to index
    })
    .listen(port)

console.log("web server running on http://" + serverName + ":" + port +"/simple");
console.log("game server running on http://" + serverName + ":" + port +"/game");