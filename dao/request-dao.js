var request = require('request');

var requestAPI = async (url, method, header, body) => {
    return new Promise((resolve, reject) => {
        request({
            uri: url,
            method: method,
            headers: header,
            json: body
        }, (error, response, body) => {
            if (error) {
                reject(error);
            }
            else {
                if (response.statusCode != 200) {
                    reject(body);
                }
                else {
                    resolve(body);
                }
            }
        })
    });
}
module.exports = { requestAPI }