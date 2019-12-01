const Property = require('../model/propertyModel');

exports.create = (req, res) => {
    const create_property = new Property({
        image: req.body.image,
        title: req.body.title,
        address: req.body.address,
        occupants: req.body.occupants,
        payment: req.body.payment,
    });

    create_property.save((err, property) => {
        if(err){
            res.send(err);
        }    
        res.json(property);
    });
}

exports.retrieve = (req , res) =>{
    Property.find({},(err,data) =>{
        if(err){
            res.send(err);
        }
        res.json(data)
    })
}
