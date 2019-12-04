const Property = require('../model/PropertyModel');

exports.search = (req, res) => {
    console.log(req.params);
    Property.find({ address: { $regex: new RegExp(req.params.address, "i") } }, (err, data) => {
        if (err) {
            res.status(503).send(err)
        } else {
            res.send(data)
        }
    });
}