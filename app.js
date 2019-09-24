const express = require('express');
const bodyParser = require('body-parser')
const helloRouter = require('./router/hello-route');
const sentimentRouter = require('./router/sentimentRoute')
let app = express();
app.use(bodyParser.json());
app.use("/",sentimentRouter);
app.use("*",(req,res,next)=>{
    let err = {
        status:404,
        message:"Not found "
    }
    next(err);
})
app.use((err,req,res,next)=>{
    var result = {
        status : err.status || 500,
        message : err.message,
        err:err
    };
    res.status(result.status).json(result);
})
module.exports = app;