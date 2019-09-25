var chartData = [{
    name: 'UK-positive',
    id: 'positive',
    data: [5, 3, 4, 7, 2],
}, {
    name: 'UK-negative',
    id: 'negative',
    data: [3, 4, 4, 2, 5],
}, {
    name: 'UK-question',
    id: 'question',
    data: [2, 5, 6, 2, 1],
}, {
    name: 'UK-other',
    id: 'other',
    data: [3, 0, 4, 4, 3],
}, {
    name: 'US-positive',
    color: Highcharts.getOptions().colors[0],
    linkedTo: 'positive',
    data: [6, 4, 5, 8, 3],
    stack: 'US'
}, {
    name: 'US-negative',
    color: Highcharts.getOptions().colors[1],
    linkedTo: 'negative',
    data: [2, 3, 3, 1, 4],
    stack: 'US'
}, {
    name: 'US-question',
    color: Highcharts.getOptions().colors[2],
    linkedTo: 'question',
    data: [3, 6, 7, 3, 2],
    stack: 'US'
}, {
    name: 'US-other',
    color: Highcharts.getOptions().colors[3],
    linkedTo: 'other',
    data: [2, 0, 3, 3, 2],
    stack: 'US'
},
{
    name: 'AUS-positive',
    color: Highcharts.getOptions().colors[0],
    linkedTo: 'positive',
    data: [6, 4, 5, 8, 3],
    stack: 'AUS'
}, {
    name: 'AUS-negative',
    color: Highcharts.getOptions().colors[1],
    linkedTo: 'negative',
    data: [2, 3, 3, 1, 4],
    stack: 'AUS'
}, {
    name: 'AUS-question',
    color: Highcharts.getOptions().colors[2],
    linkedTo: 'question',
    data: [3, 6, 7, 3, 2],
    stack: 'AUS'
}, {
    name: 'AUS-other',
    color: Highcharts.getOptions().colors[3],
    linkedTo: 'other',
    data: [2, 0, 3, 3, 2],
    stack: 'AUS'
}];
//var chartData = [];
var category = ['10 (UK-US-AUS)', '11 (UK-US-AUS)', '12 (UK-US-AUS)', '13 (UK-US-AUS)', '14 (UK-US-AUS)'];
//var category = [{ "name": 10, "categories": ["UK", "US", "AUS"] }, { "name": 11, "categories": ["UK", "US", "AUS"] }, { "name": 12, "categories": ["UK", "US", "AUS"] }, { "name": 13, "categories": ["UK", "US", "AUS"] }, { "name": 14, "categories": ["UK", "US", "AUS"] }];
//var category = [{ "name": 10}, { "name": 11 }, { "name": 12 }, { "name": 13  }, { "name": 14 }];

/**
 * Function to create chart data for all handles 
 */


function loadAllChartData() {
    var handles = [
        {
            handle: "@travelexuk", div: "UK"
        }, {
            handle: "@Travelex_USA", div: "US"
        }, {
            handle: "@Travelex_AUS", div: "AUS"
        }]
    for (i = 0; i < handles.length; i++) {
        getStatistics(handles[i].handle, handles[i].div);
        console.log(JSON.stringify(chartDataArr[i]))
        //   loadCharts(chartDataArr[i]);
    }
    //loadCharts();
}

function getStatistics(searchParam, div_info) {
    console.log(searchParam);
    $.ajax({
        url: baseURL + '/searchTweet/weekData',
        type: 'post',
        dataType: 'json',
        data: {
            "searchTerm": searchParam,
            "div_data": div_info
        },
        async: false,
        success: function (data) {
            //  console.log(data);
            //console.log(data.barChartData);
            //var info1 = new  chartData(data.barChartData, data.div_data);
            var singleData = {
                "barData": data.barChartData,
                "div_info": data.div_data
            }
            // console.log(singleData)
            chartDataArr.push(singleData)
        }
    });
}

function loadCharts() {
    Highcharts.chart('container', {

        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 10,
                beta: 10,
                viewDistance: 0,
                depth: 100
            }
        },

        title: {
            text: 'Weekly Sentiments grouped by Region '
        },
        xAxis: {
            categories: category
        },

        yAxis: [{
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of Tweets'
            }
        }],

        tooltip: {
            formatter: function () {
                console.log(this);
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: chartData
    });
}

loadCharts();