const Photos = require('../model/image');

exports.create = (req, res) => {
    const uploadImage = new Photos({
        imageId: req.body.iamgeId,
        image1: req.files[0].filename,
        image2: req.files[1].filename, 
        image3: req.files[2].filename, 
        image4: req.files[3].filename, 
        image5: req.files[4].filename, 
        image6: req.files[5].filename,         
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