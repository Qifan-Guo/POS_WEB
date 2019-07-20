var express = require('express');
var mongoose = require ('mongoose');
var bodyparser = require("body-parser");
var path = require('path');

var app = express();

//port number
var port = 3000;

app.get('/',(req,res)=>{
    res.send("qifan is here !");
})


app.listen(port,()=>{
    console.log("Server started at Port"+port);
})