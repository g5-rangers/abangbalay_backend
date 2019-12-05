const Property = require('../model/PropertyModel');

exports.saveProperty = (req, res) => {
    var imgUrl = `http://localhost:4000/files/`
    var details = JSON.parse(req.body.details)
    console.log(details);

    var imgs = req.files.map(img => {
        img.filename = imgUrl + img.filename
        return img.filename
    })
    const create_property = new Property({
        image: imgs,
        name: details.name,
        address: details.address,
        occupants: details.occupants,
        freebies: details.freebies,
        payment: details.payment,
        creator: details.creator,
        owner_name: details.owner_name,
        email: details.email,
        contact: details.contact
    });
    create_property.save((err, property) => {
        if (err) {
            console.log(err);

            return res.status(500).send(err);
        }
        console.log(property);

        res.json(property);
    });
}

exports.RetrieveAll = (res) => {
    Property.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(data)
    })
}