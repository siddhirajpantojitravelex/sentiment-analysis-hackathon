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

function chartData(req,res,next){
    res.status(200).json(data);
}
module.exports = {
    chartData
}