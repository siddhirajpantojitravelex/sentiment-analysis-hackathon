const queries = require('./queries').QUERIES;
const db = require('./db');

async function insertIntoSentimentTable(sentiment_info) {
    return new Promise((resolve, reject) => {
        db.query(queries.SENTIMENT.INSERT, [sentiment_info.date, sentiment_info.title, sentiment_info.description, sentiment_info.jobTitle, sentiment_info.pros, sentiment_info.cons, sentiment_info.advice, 0, 0], (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                for (let i = 0; i < sentiment_info.classification.length; i++) {
                    db.query(queries.SENTIMENT_CLASSIFICATION.INSERT, [data.rows[0].review_id, sentiment_info.classification[i]], (err, classificationData) => {
                        if (err) {
                            reject(err)
                        }
                        else {
                            resolve(data.rows);
                        }
                    })
                }

            }
        })

    })
}
/**
 * Function to get array of sentiments to be sent to google for analysis
 */
async function getSentimentsToProcess() {
    return new Promise((resolve, reject) => {
        db.query(queries.SENTIMENT.SELECT_BY_EMPTY_DESCRIPTION_MAG, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("TCL: getSentimentToProcess -> data", data.rows)
                resolve(data.rows);
            }
        })

    })
}

/**
 * Function to update array of sentiments based on the values recieved from google analysis
 */
async function updateSentiments(sentiment_info) {
    return new Promise((resolve, reject) => {
        db.query(queries.SENTIMENT.UPDATE, [sentiment_info.review_id, sentiment_info.description_value, sentiment_info.description_magnitude, sentiment_info.pros_value, sentiment_info.pros_magnitude, sentiment_info.cons_value, sentiment_info.cons_magnitude, sentiment_info.result], (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                console.log("TCL: updateSentiments -> data", data.rows)
                resolve(data.rows);
            }
        })

    })
}

module.exports = {
    insertIntoSentimentTable, getSentimentsToProcess, updateSentiments
}