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
        //console.log("TCL: innerChartService -> result", result)
        let innerChartJson = [];
        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            innerChartJson.push({ "sentiment": element.category, "value": element.cnt })
        }
        console.log("TCL: innerChartService -> result", innerChartJson)
        
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

function calculatePercentage(mainChartResult){
    let sum = 0.0;
    
    //for loop to fetch the total value
    for (let i = 0; i < mainChartResult.length; i++) {
        sum += (mainChartResult[i].value * 1);
    }

    for(i = 0; i<mainChartResult.length; i++){
        mainChartResult[i].percentage = Math.round(((mainChartResult[i].value * 100) / sum));
    }
    
    return mainChartResult;
}

module.exports = {
    mainChartService, innerChartService, calculatePercentage
}