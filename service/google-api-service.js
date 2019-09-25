const googleApiDao = require('../dao/google-api')

async function getValueForReview(review) {
    try {
        let result = {}
        //console.log(JSON.stringify(review));
        let descriptionValue = await googleApiDao.getSentimenetValue(review.review_description);
        let proValue = await googleApiDao.getSentimenetValue(review.pros);
        let consValue = await googleApiDao.getSentimenetValue(review.cons);
        result.desc = descriptionValue;
        result.pros = proValue;
        result.cons = consValue;
        return result;
    }
    catch (err) {
        console.log("Error While Getting Google Reviews ", JSON.stringify(err));
        throw err;
    }
}

module.exports = {
    getValueForReview
}