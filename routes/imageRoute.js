const express = require('express');
const app = express.Router();

const image_controller = require('../controller/imageController');


app.post('/', image_controller.create);
app.get('/', image_controller.get);

module.exports = app;