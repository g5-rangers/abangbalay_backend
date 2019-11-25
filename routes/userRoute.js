const express = require('express')
const app = express.Router()
var User = require('../model/user')
var  Property = require('../model/property')
const jwt = require('jsonwebtoken')
const sercet = "madam1234"

app.post('/property', (req, res) => {
    var data= new Property(req.body)
    data.save()
    res.send(data)
})

app.get('/login', (req, res) => {
    var pass = req.body.password
    var query = User.findOne({ email: req.body.username })

    query.exec(function (err, result) {
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
    })
})


app.post("/register", (req, res) => {
    var response = { error: {}, data: {}, response_status: 200, access_token: null }

    var user = new User(
        req.body
    )
    user.save().then(result => {
        response.error = null
        response.data.status = true
        response.data.body = result
        response.data.message = "successfully registered"
        res.send(response)
    }).catch(err => {
        response.error.status = true
        response.response_status=500
        response.data = null
        response.error.body = err
        response.error.message = "failed to register"
        res.send(response)
    })
})

module.exports = app