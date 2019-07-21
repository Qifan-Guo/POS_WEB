const express = require('express');
const router = express.Router();
var ObjectId = require('mongodb').ObjectID;
const order = require('../models/order');


router.get('/order',(req,res,next)=>{
    order.find((err,orders)=>{
        if(err){
            res.json(err);
        }else{
            res.json(orders);
        }
    })
});

//order properties:
//item_name:string
//price:number
router.post('/order',(req,res,next)=>{
    let newOrder = new order({
        item_name: req.body.item_name,
        price: req.body.price
    });
    newOrder.save((err,order)=>{
        if(err){
            res.json({msg: 'failed to add order'});
        }else{
            res.json({msg: 'order added successfully'});
        }

    })
});

router.delete('/order/:id',(req,res,next)=>{
    
    order.deleteOne({"_id":req.params.id},(err,result)=>{
        if(err){
            res.json({msg: 'Error:cannot remove order'});
        }else{
            res.json(result);
            
             }
    })
});
module.exports = router;