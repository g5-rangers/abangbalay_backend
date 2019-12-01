const express = require('express');
const app = express.Router();
const upload = require('../middlewares/multer').array('img', 6);
const propertyController = require('../controller/rangiePropertyController');
const checkUploadPath = require('../middlewares/checkpath');

app.post('/uploadMultiple', checkUploadPath, (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.end("Error uploading file.");
        } else {
            var imgs = req.files
            if (!imgs || !imgs.length) {
                const error = new Error('Please upload a file')
                error.httpStatusCode = 400
                res.status(500).send(error);
            } else {
                propertyController.saveProperty(req, res)
            }
        }
    });
})

app.get('/retrieveAll', (req, res) => {
    getAll.retrieveAll(res);
    // uploader(req, res)
    // res.send(imgs);
})



module.exports = app;