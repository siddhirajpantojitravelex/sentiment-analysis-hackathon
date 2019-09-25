/**
 * This is for getting Chart Related Data 
 * 1. Get all distinct categories by group by record count on other table ( need percentage over here )
 */
const chartDao = require('../dao/chartDao');

async function mainChartService() {
    var result;
    try {
        return await chartDao.getMainGraphData();
    }
    catch (err) {
        console.error("Error Occured while fetching chart data ", err)
        return {
            status: 500,
            message: "Something went wrong ",
            err: err
        }
    }
}

async function innerChartService(classification_description) {
    var result;
    try {
        result = await chartDao.getInnerGraphData(classification_description);
        let percent = calculatePercentage(result)
        let innerChartJson = [];
        for (let index = 0; index < percent.length; index++) {
            const element = percent[index];
            innerChartJson.push({ "sentiment": element.category, "value": element.percentage })
        }
        console.log("TCL: innerChartService -> percent", innerChartJson)
        
        return innerChartJson
    }
    catch (err) {
        console.error("Error Occured while fetching chart data ", err)
        return {
            status: 500,
            message: "Something went wrong ",
            err: err
        }
    }
}

function calculatePercentage(data){
    let sum = 0.0;
    
    //for loop to fetch the total value
    for (let i = 0; i < data.length; i++) {
        sum += (data[i].value * 1);
    }

    for(i = 0; i<data.length; i++){
        data[i].percentage = Math.round(((data[i].value * 100) / sum));
    }
    
    return data;
}

module.exports = {
    mainChartService, innerChartService, calculatePercentage
}