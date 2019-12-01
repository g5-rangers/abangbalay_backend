var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var property = new Schema({
  image: {type:String},
  title: {type: String},  
  address: {type:String},
  occupants: {type:Number},
  payment: {type:Number}
},
  { collection: 'properties' }
);

var Property = mongoose.model('properties', property)

module.exports = Property