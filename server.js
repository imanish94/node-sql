const express = require("express");
const userRoute = require('./router/userRoute');
const app = express();
require('dotenv').config();

app.use('/users',userRoute);

app.listen(process.env.PORT,()=>{
    console.log(`port running on ${process.env.PORT}`)
})