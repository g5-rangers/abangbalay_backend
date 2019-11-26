const Property = require('../model/property');

exports.create = (req, res) => {
    const property = new Property({
        image: req.body.image,
        title: req.body.title,
        address: req.body.address,
        occupants: req.body.occupants,
        payment: req.body.payment,
    });

    property.save((err, property) => {
        if(err){
            res.send(err);
        }    
        res.json(property);
    });
}
