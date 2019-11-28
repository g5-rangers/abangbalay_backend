const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var userRoute = require('./routes/userRoute')
var cors = require('cors')
var multer = require('multer')

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());
app.use(cors())
app.use(userRoute)

// app.use('/files', express.static(path.join(__dirname, 'uploads')))


// var upload = multer({ storage: storage })


require('./setup/mongo')

const user = require('./routes/userRoute'); 
const image = require('./routes/imageRoute');
const property = require('./routes/propertyRoute'); 

app.use('/user', user);
app.use('/image', image);
app.use('/property', property);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))