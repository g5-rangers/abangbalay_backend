const express = require('express');
const app = express.Router();

const property_controller = require('../controller/propertyController');


app.post('/', property_controller.create);


module.exports = app;