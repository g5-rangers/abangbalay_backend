const express = require('express')
const app = express.Router()



const user_controller = require('../controller/userController');

app.post('/register', user_controller.create);
app.get('/login', user_controller.get);


module.exports = app