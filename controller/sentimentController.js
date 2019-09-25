const service = require('../service/sentimentService');

const data = require('../service/data3.json')
async function sentimentController(req, res, next) {
    try {
        const dataArr = ["Work/Life Balance", "Career Opportunities", "Compensation and Benefits", "Senior Management", "Culture & Values"]
        for (let i = 0; i < data.length; i++) {
            let datasingle = data[i]
            let classifications = datasingle.classifications;
            if (classifications.length < 5) {
                // Identiy and insert values as 0 
                for (let j = 0; j < dataArr.length; j++) {
                    let found = false
                    for (let k = 0; k < classifications.length; k++) {
                        if (classifications[k].class == dataArr[j]) {
                            found = true
                            break;
                        }
                    }
                    if (!found) {
                        classifications.push({ class: dataArr[j], value: "0.0" })
                    }
                }
            }
            result = await service.sentimentService(datasingle);

        }
        res.status(result.status).json({ "message": "true" });
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    sentimentController
}