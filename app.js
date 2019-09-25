const express = require('express');
const bodyParser = require('body-parser')
const helloRouter = require('./router/hello-route');
const sentimentRouter = require('./router/sentimentRoute')
const chartRoute = require('./router/chart-router')
const path = require('path')
let app = express();
app.use(bodyParser.json());
app.use("/html",express.static(path.join(__dirname,path.sep,"public")))
app.use("/",helloRouter);
app.use("/sentiment",sentimentRouter);
app.use("/chart",chartRoute);
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