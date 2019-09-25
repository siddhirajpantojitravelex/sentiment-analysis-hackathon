const queries = require('./queries').QUERIES;
const db = require('./db');

async function insertIntoSentimentTable(sentiment_info) {
    return new Promise((resolve, reject) => {
        db.query(queries.SENTIMENT.INSERT, [sentiment_info.date, sentiment_info.title, sentiment_info.description, sentiment_info.role, sentiment_info.pros, sentiment_info.cons, sentiment_info.advice, 0, 0], (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                for (let i = 0; i < sentiment_info.classifications.length; i++) {
                    db.query(queries.SENTIMENT_CLASSIFICATION.INSERT, [data.rows[0].review_id, sentiment_info.classifications[i].class,sentiment_info.classifications[i].rating], (err, classificationData) => {
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
        let data1 = [sentiment_info.review_id, sentiment_info.description_value, sentiment_info.description_magnitude, sentiment_info.pros_value, sentiment_info.pros_magnitude, sentiment_info.cons_value, sentiment_info.cons_magnitude, sentiment_info.result]
        db.query(queries.SENTIMENT.UPDATE, data1 , (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data.rowCount);
            }
        })

    })
}

module.exports = {
    insertIntoSentimentTable, getSentimentsToProcess, updateSentiments
}