const Photos = require('../model/image');

exports.create = (req, res) => {
    const uploadImage = new Photos({
        imageId: req.body.iamgeId,
        images: []     
    });

    uploadImage.save((err, image) => {
        if(err){
            res.send(err);
        }    
        res.json(image);
    });
}

exports.get = (req, res) => {
    Photos.find({}, (err, image) => {
        if(err){
            res.send(err);
        }    
        res.json({ data : image});     
    });
}