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
                        // else {
                        //     console.log(classificationData.rows);
                        // }
                    })
                }
                resolve(data.rows);
            }
        })

    })
}


module.exports = {
    insertIntoSentimentTable
}