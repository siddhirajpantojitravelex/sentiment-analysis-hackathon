const sentimentDao = require('../dao/sentimentDao');

const googleapi = require('./google-api-service');


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
    //console.log("In Function ");
    try {
        let fetchedData = await sentimentDao.getSentimentsToProcess();
        for (let index = 0; index < fetchedData.length; index++) {
            const singleData = fetchedData[index];
            let dataFromGoogle = await googleapi.getValueForReview(singleData);
            let udpateJson = {
                "review_id": singleData.review_id,
                "description_value": dataFromGoogle.desc.score,
                "description_magnitude": dataFromGoogle.desc.magnitude,
                "pros_value": dataFromGoogle.pros.score,
                "pros_magnitude": dataFromGoogle.pros.magnitude,
                "cons_value": dataFromGoogle.cons.score,
                "cons_magnitude": dataFromGoogle.cons.magnitude,
                "result": ((dataFromGoogle.desc.score * dataFromGoogle.desc.magnitude)
                    + (dataFromGoogle.pros.score * dataFromGoogle.pros.magnitude)
                    + (dataFromGoogle.cons.score * dataFromGoogle.cons.magnitude))
            }
            //update with the value
            let updateResult = await sentimentDao.updateSentiments(udpateJson);
        }
        
    }
    catch (err) {
        console.log("sentimentUpdater -> err", err);
    }
}

setInterval(sentimentUpdater,5000);
//setTimeout(sentimentUpdater, 1000);

module.exports = {
    sentimentService
}