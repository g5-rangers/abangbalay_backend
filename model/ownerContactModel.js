var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactInformation = new Schema({
    ownerName: {type: String},
    cellphoneNum: {type: Number},
    landlineNum: {type: Number},
    fbAccount: {type: String}
},
  { collection: 'contacts' }
);
    
var Contacts = mongoose.model('Contacts', contactInformation);

module.exports = Contacts 
