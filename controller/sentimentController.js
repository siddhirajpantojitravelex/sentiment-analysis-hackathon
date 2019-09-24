const service = require('../service/sentimentService')

async function sentimentController(req, res, next) {
    try {
        var sentiment_info = [{
            date: '2019/04/02',
            title: 'This is title222',
            description: 'this is description',
            jobTitle: 'this is job title',
            pros: 'this is pros',
            cons: 'this is cons',
            advice: 'this is advice'
        },
        {
            date: '30 Apr 2019',
            title: 'This is title333',
            description: 'this is description',
            jobTitle: 'this is job title',
            pros: 'this is pros',
            cons: 'this is cons',
            advice: 'this is advice'
        }];
        for (let i = 0; i < sentiment_info.length; i++) {
            result = await service.sentimentService(sentiment_info[i]);
            res.status(result.status).json(result);
        }
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    sentimentController
}