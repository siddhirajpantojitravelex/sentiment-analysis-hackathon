const helloDao = require('../dao/hello-dao');
const sentimentDao = require('../dao/sentimentDao');

async function sentimentService() {
    var result;
    try {
        result = await sentimentDao.insertIntoSentimentTable();
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

async function helloService() {
    var result;
    try {
        result = await helloDao.healthCheck()
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
    helloService
}