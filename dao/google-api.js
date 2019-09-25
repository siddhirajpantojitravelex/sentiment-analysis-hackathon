const request = require('./request-dao');

async function getSentimenetValue(str) {
    try {
        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            throw new Error("Google API Key is required ")
        }
        const url = "https://language.googleapis.com/v1/documents:analyzeSentiment?key=" + apiKey
        const headers = {
            'Content-Type': 'application/json'
        }
        let body = {
            document: {
                content: str,
                type: "PLAIN_TEXT"
            }
        }
        let result = await  request.requestAPI(url, "POST", headers,body);
        console.log("Result ", result);
        return result.documentSentiment;
    }
    catch(err){
        console.error("Error ")
        throw err;
    }
}

module.exports = {
    getSentimenetValue
}