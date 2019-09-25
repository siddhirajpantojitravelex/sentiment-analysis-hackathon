const data = [
	{
		name:"Work Life balance",
		value:30,
		drilldown :[
			{"sentiment":"positive", "value":20},
			{"sentiment":"negative", "value":70},
			{"sentiment":"neutral", "value":10}
		]
	},
	{
		name:"Culture and Values ",
		value:30,
		drilldown :[
			{"sentiment":"positive", "value":20},
			{"sentiment":"negative", "value":70},
			{"sentiment":"neutral", "value":10}
		]
	},
	{
		name:"Career Opportunities",
		value:30,
		drilldown :[
			{"sentiment":"positive", "value":20},
			{"sentiment":"negative", "value":70},
			{"sentiment":"neutral", "value":10}
		]
	},
	{
		name:"Compensation and Benefits",
		value:30,
		drilldown :[
			{"sentiment":"positive", "value":20},
			{"sentiment":"negative", "value":70},
			{"sentiment":"neutral", "value":10}
		]
	},
	{
		name:"Senior Management",
		value:30,
		drilldown :[
			{"sentiment":"positive", "value":20},
			{"sentiment":"negative", "value":70},
			{"sentiment":"neutral", "value":10}
		]
	},{
		name:"Current Employee- Anonymous Employee",
		value:30,
		drilldown :[
			{"sentiment":"positive", "value":20},
			{"sentiment":"negative", "value":70},
			{"sentiment":"neutral", "value":10}
		]
	}
]

const chart = require('../service/chart-service');

async function chartData(req,res,next){

	mainChartResult = await chart.mainChartService();
	
	let percent  = chart.calculatePercentage(mainChartResult)
	let mainChartJson;
	for (let index = 0; index < percent.length; index++) {
		const mainChartData = percent[index];
		console.log("TCL: chartData -> mainChartData.classification_description", mainChartData.classification_description)
		mainChartJson = {
			'name': mainChartData.classification_description,
			'value': mainChartData.percentage,
			drilldown: chart.innerChartService(mainChartData.classification_description)
		}
	}

	res.status(200).json(mainChartJson);
}

module.exports = {
    chartData
}