var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var property = new Schema({
  image: {type:String},
  title: {type: String},  
  address: {type:String},
  occupants: {type:Number},  
  payment: {type:Number}

},
  { collection: 'property' }
);

var Property = mongoose.model('Property', property)

module.exports = Property