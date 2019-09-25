// var twitterHandles = [];
// var chartData = function (chartInfo, divInfo)
//  { div_info: divInfo, barData = chartInfo };
var chartData = { "div_info": "" }
var chartDataArr = [];
var pieChartData = [];

function loadAllChartData() {
    var handles = [
        {
            handle: "@travelexuk", div: "chart_div_uk"
        }, {
            handle: "@Travelex_USA", div: "chart_div_us"
        }, {
            handle: "@Travelex_AUS", div: "chart_div_aus"
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
                "barData":data.barChartData,
                "div_info":data.div_data
            }
            console.log(singleData)
            //chartDataArr.push(singleData)
            loadCharts(singleData);

            //console.log("In data"+JSON.stringify(info1))
              // loadCharts(chartData);

            //   getStatistics(selectedHandle);
        }
    });
}

function loadCharts(chartData) {
    console.log("adgashd")
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(()=>{
        drawVisualization(chartData)
    });
}

function drawVisualization(chartData) {
    // Some raw data (not necessarily accurate)
    // var data = google.visualization.arrayToDataTable([
    //     ['Week', 'Positive', 'Negative', 'Nuetral', 'Average'],
    //     ['8', 20, 22, 21, 21],
    //     ['9', 25, 27, 21, 24.33],
    //     ['10', 24, 16, 17, 19.67],
    //     ['11', 9, 6, 7, 7.33]
    // ]);
    console.log(JSON.stringify(chartData.barData));
    var barChartArr = new Array();
    barChartArr.push(['Week', 'Positive', 'Negative', 'Query', 'Other']);
    for (var x = 0; x < chartData.barData.length; x++) {
        var tempArr = new Array();

        tempArr.push(chartData.barData[x].week);
        tempArr.push(chartData.barData[x].weeklyData.positive ? chartData.barData[x].weeklyData.positive : 0);
        tempArr.push(chartData.barData[x].weeklyData.negative ? chartData.barData[x].weeklyData.negative : 0);
        tempArr.push(chartData.barData[x].weeklyData.question ? chartData.barData[x].weeklyData.question : 0);
        tempArr.push(chartData.barData[x].weeklyData.other ? chartData.barData[x].weeklyData.other : 0);
       // tempArr.push((tempArr[1] + tempArr[2] + tempArr[3] + tempArr[4]) / 4);
        barChartArr.push(tempArr);
    }
    var data = google.visualization.arrayToDataTable(barChartArr);
    var options = {
        title: '',
        vAxis: {
            title: 'Tweets', format: 'long', gridlines: { count: 4 }, textStyle: {
                color: 'black',
                fontSize: 12,
                fontName: 'Arial',
                bold: true
            }, titleTextStyle: {
                color: '#01579b',
                fontSize: 12,
                fontName: 'Arial',
                bold: true
            },ticks: [0, 20, 40, 60]
        },
        hAxis: {
            title: 'Week of the year 2018  ', textStyle: {
                color: 'black',
                fontSize: 12,
                fontName: 'Arial',
                bold: true
            }, titleTextStyle: {
                color: '#01579b',
                fontSize: 12,
                fontName: 'Arial',
                bold: true
            }
        },
        seriesType: 'bars',
        series: { 4: { type: 'line' } },
        colors: ['#28a745', '#dc3545', '#007bff', '#ffc107', 'black'],
        animation: {
            startup: true,
            duration: 100,
            easing: 'out',
        },
        isStacked:true,
        width: '100%',
        legend: 'none'
    };
    console.log(chartData.div_info);
    var chart = new google.visualization.ComboChart(document.getElementById(chartData.div_info));
    chart.draw(data, options);
}