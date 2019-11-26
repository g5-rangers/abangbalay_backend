var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var image = new Schema({
    imageId: {type: Number},
    image1: {type: String},
    image2: {type: String},
    image3: {type: String},
    image4: {type: String},
    image5: {type: String},
    image6: {type: String},
    Description: {type: String}
},
  { collection: 'images' }
);
    
var Photos = mongoose.model('Photos', image);

module.exports = Photos