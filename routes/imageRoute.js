const express = require('express');
const app = express.Router();
const multer = require('multer')

require('../controller/imageController');
var upload = multer();

app.post('/uploadMultiple', upload.array('img'), (req, res, next) => {
    const imgs = req.files
    cb(imgs, res)
})


module.exports = app;