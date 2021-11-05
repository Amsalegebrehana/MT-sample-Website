const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

const userPost = require('./routes/user');

const app = express();


// cors middleware 
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) 
// parse application/json
app.use(bodyParser.json())
 
// user Middleware
app.use("/api/user",userPost);



// connect to db
mongoose.connect(process.env.DB_CONNECTION_URL,console.log("DB is connected...."))



const port = process.env.PORT || 5000;

app.listen(port,console.log(`the server is ruing in port ${port} `));