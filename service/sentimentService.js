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

async function getSentimentsToProcess() {
    var result;
    try {
        return await sentimentDao.getSentimentsToProcess();
    }
    catch (err) {
        console.error("Error Occured while connecting database ", err)
    }
}


/**
 * Atul and William 
 * 1. Get Unranked records array 
 * 2. Send Each array record to  google Api Service 
 * 3. Update each record with the result in each column 
 * 4. Result = ( (description_value x desc_mag) + (pros_value x pros_magnitude) + (cons_value x cons_mag) )
 * 5. Call this method in Set Interval of 1 min from server.js or from anywhere 
 */
async function sentimentUpdater(){
    try {
        let fetchedData = await service.getSentimentsToProcess();
        fetchedData.forEach(singleData => {
            let dataFromGoogle = await googleapi.getValueForReview(singleData);
            let udpateJson = {
                "reviewId": singleData.reviewId,
                // Add other props here 
            }
            //update with the value
            let updateResult = await sentimentDao.updateSentiments(udpateJson);
        });
    }
    catch (err) {
        console.log("TCL: sentimentUpdater -> err", err);
    }
}
setInterval(sentimentUpdater,10000);
module.exports = {
    sentimentService
}