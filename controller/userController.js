const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const sercet = "madam1234"


exports.create = (req, res) => {
    console.log(req.body)
    var response = { error: {}, data: {}, response_status: 200, access_token: null }

    var user = new User(
        req.body
    )
    user.save().then(result => {
        response.error = null
        response.data.status = true
        response.data.body = result
        response.data.message = "successfully registered"
        res.send(response.data)
        console.log(response.data + " Data Saved!")

    }).catch(err => {
        response.error.status = true
        response.response_status = 500
        response.data = null
        response.error.body = err
        response.error.message = "failed to register"
        res.send(response.data)
    })
}

exports.get = (req, res) => {
    console.log(req.body)
    var pass = req.body.password
    var query = User.findOne({ email: req.body.email })

    query.exec(function (err, result) {
        if (result) {
            var respass = result.password
            if (pass == respass) {
                var token = jwt.sign(req.body, sercet, { expiresIn: "7d" })
                res.send({
                    user: {
                        email: result.email,
                        password: result.password
                    },
                    access_token: token
                })

            }
        }else{
            res.status(404).send("error")
        }
    })

}