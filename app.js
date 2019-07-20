var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');
var cors = require('cors');

var app = express();
var route = require('./routes/route');

//middleware
app.use(cors());
app.use(bodyparser.json());

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/whatever');


mongoose.connection.on("err",(err)=>{
    if(err){
        console.log('hey shit does not work');
    }else {
        console.log('hey shit works');
    }
    
});

mongoose.connection.on("connected",()=>{
    console.log("connected to db");
    
});
//port number
var port = 3000;

//route
app.use('/api',route);

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send("qifan is here !");
})


app.listen(port,()=>{
    console.log("Server started at Port"+port);
})