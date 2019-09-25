let router = require('express').Router();
const controller = require('../controller/sentimentController')
router.route("/sentiment").post(controller.sentimentController).all((req,res,next)=>{
    res.status(501).json({message:"Method Not Implemented"});
});
module.exports = router;