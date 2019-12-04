var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactInformation = new Schema({
    ownerName: {type: String, required: true},
    cellphoneNum: {type: Number, required: true},
    landlineNum: {type: Number, required: true},
    fbAccount: {type: String, required: true}
},
  { collection: 'contacts' }
);
    
var Contacts = mongoose.model('Contacts', contactInformation);

module.exports = Contacts 
