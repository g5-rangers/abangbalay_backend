var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
    email:{
    type:String,
  },
  password: {
    type: String
  }

},
  { collection: 'account' }
);

var User = mongoose.model('User', user);

module.exports = User