const service = require('../service/sentimentService');

async function sentimentController(req, res, next) {
    try {
        // var sentiment_info = {
        //     date: '2019/04/02',
        //     title: 'This is title222',
        //     description: 'this is description',
        //     jobTitle: 'this is job title',
        //     pros: 'this is pros',
        //     cons: 'this is cons',
        //     advice: 'this is advice',
        //     classification:['Work/life balance','Happiness','Culture & Values','Career Opportunities']
        // };
        //console.log(req.body);
            result = await service.sentimentService(req.body);
            res.status(result.status).json(result);
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    sentimentController
}