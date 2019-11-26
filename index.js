const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var userRoute = require('./routes/userRoute')
var cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json());
app.use(cors())
app.use(userRoute)

require('./setup/mongo')
require('./model/property')

const user = require('./routes/userRoute'); 
const image = require('./routes/imageRoute');
const property = require('./routes/propertyRoute'); 

app.use('/user', user);
app.use('/image', image);
app.use('/property', property);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))