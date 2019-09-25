let router = require('express').Router();
const controller = require('../controller/chart-controller')
router.route("/").get(controller.chartData).all((req,res,next)=>{
    res.status(501).json({message:"Method Not Implemented"});
});
module.exports = router;