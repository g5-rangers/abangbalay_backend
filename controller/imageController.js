
require('./imageDB')
var propertyController = require('../controller/rangiePropertyController')

module.exports = (req, res) => {
    var imgs = req.files
    var errors = []
    if (!imgs) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    } else {
        propertyController.create(req, res)
    }
}

