const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    image : {type : [String] , required: true},
    name: {type : String , required: true},
    address: {type : String , required: true},
    occupants: {type: Number , required: true},
    freebies: {type: String , required: true},
    payment: {type: Number , required: true},
    creator: {type: String, required: true}
},{
    collection:'properties'
})

var Property = mongoose.model('Property', PropertySchema);

module.exports = Property
