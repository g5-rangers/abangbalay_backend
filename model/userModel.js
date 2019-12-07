var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
  email:{type:String, required:true},
  password: {type: String, required:true}
},
  { collection: 'account' }
);

user.statics.updateUser = async function(email, newEmail, newPassword) {
  return await this.updateOne({"email" : email}, {$set : {"email" : newEmail, "password" : newPassword}})
}

user.statics.getByEmail = async function(email) {
  return await this.findOne({"email" : email})
}

var User = mongoose.model('User', user);

module.exports = User