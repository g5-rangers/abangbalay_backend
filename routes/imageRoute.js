const express = require('express');
const app = express.Router();
const multer = require('multer')

require('../controller/imageController');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './photos');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
      }
})

var upload = multer({ storage: storage }).array('img',6)



app.post('/uploadMultiple', upload, (req, res, next) => {
    const imgs = req.files
    cb(imgs, res)
    // res.send(imgs);
})


module.exports = app;