const service = require('../service/hello-service')

async function helloController(req,res,next){
    try {
       result = await service.helloService();
       res.status(result.status).json(result);
    }
    catch(err){
        next(err);
    }
}

module.exports = {
    helloController
}