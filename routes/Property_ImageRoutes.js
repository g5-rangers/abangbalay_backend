const express = require('express');
const app = express.Router();
const multer = require('multer')

var uploader = require('../controller/imageController');
var getAll = require('../controller/propertyController');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'photos');
    },
    filename: function (req, file, cb) {
        console.log( `${Date.now()}_${file.originalname}`);
        
        cb(null, `${Date.now()}_${file.originalname}`);
      },
})

var upload = multer({ storage: storage }).array('img',6)

app.post('/uploadMultiple', upload, (req, res, next) => {
    uploader(req, res)
    // res.send(imgs);
})

app.get('/uploadMultiple', (req, res, next) => {
    getAll.retrieve(req,res)
    // uploader(req, res)
    // res.send(imgs);
})



module.exports = app;