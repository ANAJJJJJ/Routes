var express = require('express');
require('./db')
var userRoutes = require('./routes/userRoutes')
var productRoutes = require('./routes/productRoutes')
var app = express();

app.use(express.json());
var port = 4000;

app.use('/api',userRoutes)
app.use('/api1',productRoutes)
app.listen(port,(req,res)=>{
    console.log(`Server is up and running  in ${port}`);
})