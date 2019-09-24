const queries = require('./queries').QUERIES;
const db = require('./db');

async function insertIntoSentimentTable(sentiment_info) {
    return new Promise((resolve, reject) => {
        db.query(queries.SENTIMENT.INSERT, [sentiment_info.date, sentiment_info.title, sentiment_info.description, sentiment_info.jobTitle, sentiment_info.pros, sentiment_info.cons, sentiment_info.advice, 3, 2], (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data.rows);
            }
        })
    })
}

module.exports = {
    insertIntoSentimentTable
}