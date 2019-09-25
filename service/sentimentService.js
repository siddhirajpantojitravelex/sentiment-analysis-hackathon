const sentimentDao = require('../dao/sentimentDao');

const googleapi = require('../service/google-api-service');


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
        let fetchedData = await sentimentDao.getSentimentsToProcess();
        fetchedData.forEach(singleData => {
            let dataFromGoogle = await googleapi.getValueForReview(singleData);
            let udpateJson = {
                "reviewId": singleData.reviewId,
                "description_value": singleData.description_value,
                "description_magnitude": singleData.description_magnitude,
                "pros_value": singleData.pros_value,
                "pros_magnitude": singleData.pros_magnitude,
                "cons_value": singleData.cons_value,
                "cons_magnitude": singleData.cons_magnitude,
                "result": ((singleData.description_value * singleData.description_magnitude) 
                    + (singleData.pros_value * singleData.pros_magnitude) 
                    + (singleData.cons_value * singleData.cons_magnitude))
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