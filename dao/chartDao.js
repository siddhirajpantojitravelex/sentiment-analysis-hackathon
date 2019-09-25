const queries = require('./queries').QUERIES;
const db = require('./db');

/**
 * Function to get array of sentiments to be showed in the main graph
 */
async function getMainGraphData() {
    return new Promise((resolve, reject) => {
        db.query(queries.SENTIMENT_CLASSIFICATION.MAIN_GRAPH, (err, data) => {
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
 * Function to get array of sentiments to be showed in the inner graph
 */
async function getInnerGraphData(classification_description) {
    return new Promise((resolve, reject) => {
        db.query(queries.SENTIMENT_CLASSIFICATION.INNER_GRAPH, [classification_description], (err, data) => {
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
    getMainGraphData, getInnerGraphData
}