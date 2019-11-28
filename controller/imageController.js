// const Photos = require('../model/image');

var imgUrl = `http://localhost:3000/files/`
require('./imageDB')

let cb = (imgs,res)=>{
    var errors = []
    if (!imgs) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    } else {
        imgs.map(img => {
            let src = `${imgUrl}${img.filename}`; //save this to db  
           let saved = saveImage()
            if (!saved){
                errors.push(`${img.filename} save failed!`)
            };
            img.src = `http://localhost:3000/static/uploads/${img.filename}`
        })
        res.send({imgs :imgs ,errors:errors})
    }
}

module.exports = cb