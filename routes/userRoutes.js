const express = require('express')
const app = express.Router();
const user_controller = require('../controller/userController');
const search_controller = require('../controller/searchController');
const owner_controller = require('../controller/ownerContactController');

app.post('/register', user_controller.create);
app.post('/login', user_controller.get);
app.get('/search/:address', search_controller.search);
app.post('/contactInformation', owner_controller.contacts);
app.get('/getContactInfo', owner_controller.getContacts);
module.exports = app