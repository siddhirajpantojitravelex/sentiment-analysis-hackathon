const sentimentDao = require('../dao/sentimentDao');


async function sentimentService(sentiment_info) {
    var result;
    try {
        result = await sentimentDao.insertIntoSentimentTable(sentiment_info);
        return {
            status: 200,
            result
        }
    }
    catch (err) {
        console.error("Error Occured while connecting database ", err)
        return {
            status: 500,
            message: "Something went wrong ",
            err: err
        }
    }
}

module.exports = {
    sentimentService
}