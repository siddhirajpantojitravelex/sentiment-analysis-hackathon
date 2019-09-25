var twitterHandles = [];
var chartData = [];
var pieChartData = [];
//console.log(chartData);

function getStatistics(searchParam) {
    $.ajax({
        url: baseURL + "/searchTweet?searchTerm=" + encodeURIComponent(searchParam)
    }).then(function (data) {
        console.log(data.barChartData);
        chartData = data.barChartData;
        pieChartData = data.pieChartData;
        loadCharts();
        loadPieChart()
    });

}

function loadCharts() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawVisualization);

}

function drawVisualization() {
    // Some raw data (not necessarily accurate)
    // var data = google.visualization.arrayToDataTable([
    //     ['Week', 'Positive', 'Negative', 'Nuetral', 'Average'],
    //     ['8', 20, 22, 21, 21],
    //     ['9', 25, 27, 21, 24.33],
    //     ['10', 24, 16, 17, 19.67],
    //     ['11', 9, 6, 7, 7.33]
    // ]);
    console.log(JSON.stringify(chartData));
    var barChartArr = new Array();
    barChartArr.push(['Week', 'Positive', 'Negative', 'Query', 'Other', 'Average']);
    for (var x = 0; x < chartData.length; x++) {
        var tempArr = new Array();

        tempArr.push(chartData[x].week);
        tempArr.push(chartData[x].weeklyData.positive ? chartData[x].weeklyData.positive : 0);
        tempArr.push(chartData[x].weeklyData.negative ? chartData[x].weeklyData.negative : 0);
        tempArr.push(chartData[x].weeklyData.question ? chartData[x].weeklyData.question : 0);
        tempArr.push(chartData[x].weeklyData.other ? chartData[x].weeklyData.other : 0);
        tempArr.push((tempArr[1] + tempArr[2] + tempArr[3] + tempArr[4]) / 4);
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
            },ticks: [0, 10, 20, 30]
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
        width:'100%'
    };
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function callToSearchData(selectedHandle) {
    //var selectedHandle = $("#tweetSelect").val();
    callSearchAPI(selectedHandle);
    //  getStatistics(selectedHandle);
    //   getStatistics(selectedHandle);
    //console.log(selectedHandle)
}
function callSearchAPI(selected) {
    $.ajax({
        url: baseURL + '/searchTweet',
        type: 'post',
        dataType: 'json',
        data: {
            "searchTerm": selected
        },
        success: function (data) {
            //console.log(data);
            getStatistics(selected);
            //   getStatistics(selectedHandle);
        }
    });
}
function loadPieChart() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawPieChart);
}
function drawPieChart() {
    var dataArray = new Array();
    dataArray.push(["Sentiments", "No of Tweets"])
    dataArray.push(['Positive', pieChartData.positive])
    dataArray.push(['Negative', pieChartData.negative])
    dataArray.push(['Query', pieChartData.question])
    dataArray.push(['Other', pieChartData.other])
    // var data = google.visualization.arrayToDataTable([
    //     ['Sentiments', 'No of Tweets'],
    //     ['Positive', 11],
    //     ['Negative', 2],
    //     ['Neutral', 2]
    // ]);
    var data = google.visualization.arrayToDataTable(dataArray);
    var options = {
        title: '',
        is3D: true,
        slices: {
            0: { color: '#28a745' },
            1: { color: '#dc3545' },
            2: { color: '#007bff' },
            3: { color: '#ffc107' }
        },
        animation: {
            startup: true,
            duration: 100,
            easing: 'out',
        },
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
    chart.draw(data, options);
}