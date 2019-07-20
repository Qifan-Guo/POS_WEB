const express = require('express');
const router = express.Router();

router.get('/order',(req,res,next)=>{
    res.send("start ordering");
});

router.post('/order',(req,res,next)=>{
    //add order logic goes here
});

router.delete('/order',(req,res,next)=>{
    //delete order logic goes here 
});
module.exports = router;