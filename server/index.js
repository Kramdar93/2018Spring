<<<<<<< HEAD
const express = require('express');
=======
const express = require('express')
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
const path = require('path');
const bodyParser = require('body-parser');

const simple = require('./simpleController');
const game = require('./game/controller');

<<<<<<< HEAD
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
=======
var app = express()

const servername = "localhost";
const port = 8080;



app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();      
    })
    .use('/', express.static(path.join(__dirname, "../dist/")))
    .use('/simple', simple)
    .use('/game', game)
    .use('/', (req, res, next) => {
        res.sendFile(path.join(__dirname, "../dist/index.html"));
    })
    .listen(port);

console.log("running on http://" + servername + ":" + port)
>>>>>>> f7a0871b1f7cbb7c50e1efe3b46af46056f2e200
