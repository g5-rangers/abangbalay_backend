const express = require('express');
const app = express.Router();
// require('../config/multer')

require('../controller/imageController');
var upload = require('../config/multer')

app.post('/uploadMultiple', upload.array('img'), (req, res, next) => {
    const imgs = req.files
    cb(imgs, res)
})


module.exports = app;