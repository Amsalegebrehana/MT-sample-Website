const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv/config');
 
const userRoute = require('./routes/user');
const companyRoute = require('./routes/company');


const app = express();


// cors middleware 
app.use(cors());
app.use(cookieParser());
app.use('/public/upload',express.static('public/upload'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())

// user Middleware
app.use("/api/user", userRoute);
app.use("/api/company",companyRoute);



// connect to db
mongoose.connect(process.env.DB_CONNECTION_URL,console.log("DB is connected...."))




const port = process.env.PORT || 5000;

app.listen(port,console.log(`the server is ruing in port ${port} `));