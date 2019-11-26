var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
  email:{type:String, required: true, unique: true},
  password: {type: String, required: true}

},
  { collection: 'account' }
);

var User = mongoose.model('User', user);

module.exports = User