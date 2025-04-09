var express = require('express');
var dotenv = require('dotenv');

var userRoutes = require('./routes/userRoutes')
var productRoutes = require('./routes/productRoutes')
var app = express()


dotenv.config();
require('./db');
var port = process.env.port

app.use(express.json());

// changes
app.use('/api',userRoutes)
app.use('/api1',productRoutes)
app.listen(port,(req,res)=>{
    console.log(`Server is up and running  in ${port}`);
})