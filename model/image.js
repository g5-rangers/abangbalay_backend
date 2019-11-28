var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var image = new Schema({
    imageId: {type: Number},
    images: {type: [String]},
    Description: {type: String}
},
  { collection: 'images' }
);
    
var Photos = mongoose.model('Photos', image);

module.exports = Photos