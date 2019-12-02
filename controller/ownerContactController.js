const Contacts = require('../model/ownerContactModel');

exports.contacts = (req, res) => {
    var data = req.body;
    console.log(data)
    
    const create_contacts = new Contacts({
        ownerName: data.ownerName,
        cellphoneNum: data.cellphoneNum,
        landlineNum: data.landlineNum,
        fbAccount: data.fbAccount
    });
    create_contacts.save((err, contacts) => {
        if (err) {
            console.log(err);

            return res.status(500).send(err);
        }
        console.log(contacts);

        res.json(contacts);
    });
}

exports.getContacts = (res) => {
    Contacts.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(data)
    })
}