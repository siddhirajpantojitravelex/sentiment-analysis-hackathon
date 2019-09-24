const express = require('express');
const bodyParser = require('body-parser')
const helloRouter = require('./router/hello-route')
let app = express();
app.use(bodyParser.json());
app.use("/",helloRouter);
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