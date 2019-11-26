var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var property = new Schema({
  image: {type:String, required: true},
  title: {type: String, required: true},  
  address: {type:String, required: true},
  occupants: {type:Number, required: true},  
  payment: {type:Number, required: true}

},
  { collection: 'property' }
);

var Property = mongoose.model('Property', property)

module.exports = Property