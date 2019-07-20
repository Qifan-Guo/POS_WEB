const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema ({
item_name:{
    type:String,
    require:true 
},
price:{
    type:Number,
    require:true
}
});

const Order = module.exports = mongoose.model('Order',OrderSchema);
