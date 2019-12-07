const express = require('express')
const app = express.Router();
const user_controller = require('../controller/userController');
const search_controller = require('../controller/searchController');
const updateowner_controller = require('../controller/updateController');

app.post('/register', user_controller.create);
app.post('/login', user_controller.get);
app.get('/search/:address', search_controller.search);
app.put('/updateAccount', updateowner_controller.updateAccount)
module.exports = app