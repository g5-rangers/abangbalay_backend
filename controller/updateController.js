const User = require('../model/userModel');

exports.updateAccount = (req, res) => {
    console.log(req.body)
    const test = async function() {
        const update = await User.updateUser(req.body.email, req.body.newemail, req.body.newpassword)
        console.log(await User.getByEmail(req.body.newemail))
        res.send(await User.getByEmail(req.body.newemail))
    }    
    test()
}