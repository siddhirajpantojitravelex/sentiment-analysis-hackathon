//$(function () {
// Create the chart
var chartData = [];
var options = {
    chart: {
        renderTo: 'container',
        type: 'pie'
    },
    series: [],
    drilldown: {},
    title: {
        text: 'Glassdoor Review Sentiment Analysis for Travelex'
    },
    // subtitle: {
    //     text: 'Click the slices to view Categories. Source: <a href="http://glassdoor.com" target="_blank">glassdoor.com</a>'
    // },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.f}%</b> of total<br/>'
    },
}

let barchartOptions = {
    chart: {
        renderTo: 'bar_chart',
        type: 'column'
    },
    series: [],
    drilldown: {},
    title: {
        text: ''
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Rating in Percentage '
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
}
//     options.series.push({
//         name: 'John',
//         data: [3, 4, 2]
//     })


//     $(document).ready(function() {
//         var chart = new Highcharts.Chart(options);  
//         $.ajax({
//             url: baseURL + "/chart",
//             async: false
//         }).then(function (data) {
//             chartData = data;       
//             console.log("chartData ", chartData);    
//         });  
//         console.log("chartData outside ", chartData);        
//     });

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML = this.responseText;
        //console.log("chartData ", JSON.parse(this.responseText));  
        chartData = JSON.parse(this.responseText);
    }
};
xhttp.open("GET", baseURL + "/chart", false);
xhttp.send();

$(document).ready(function () {
    console.log("chartData outside ", chartData);
    // chartData.forEach((item,index) => {
    //     options.series.push({
    //         name: "Classification",
    //         data: [item]
    //     })
    // });
    let seriesData = getData();
    console.log(seriesData)
    options.series.push({
        name: "Classification",
        data: seriesData
    })
    barchartOptions.series.push({
        name: "Classification",
        data: seriesData
    })
    let drillDown = getDrillDownData()
    options.drilldown = {}
    options.drilldown.series = drillDown.series
    barchartOptions.drilldown = {}
    barchartOptions.drilldown.series = drillDown.series;
    // options.drilldown.series = []
    console.log("Drill Down is here ", options.drilldown)
    // console.log(options.series)
    //console.log(getDrillDownData());
    var chart = new Highcharts.Chart(options);
    var bar = new Highcharts.Chart(barchartOptions)

});

function getData() {
    var dataArray = [];
    dataArr = [];
    for (let i = 0; i < chartData.length; i++) {
        var name, data, drillData;
        name = chartData[i].name;
        data = chartData[i].value;
        drillData = { 'name': name, 'y': data, "drilldown": "chart" + i }
        dataArr.push(drillData)
    }
    console.log("   dataArr", dataArr)
    return dataArr;
}

function getDrillDownData() {
    let drillAll = {}
    let series = [];
    console.log(chartData.length)
    for (let i = 0; i < chartData.length; i++) {
        // For  Each Series element will be genrated here 
        let seriesElement = {}
        seriesElement.name = chartData[i].name
        seriesElement.id = "chart" + i;
        seriesElement.data = [];

        for (let j = 0; j < chartData[j].drilldown.length; j++) {
            var data = [];
            data = [chartData[i].drilldown[j].sentiment, parseFloat(chartData[i].drilldown[j].value)];
            seriesElement.data.push(data);
        }
        series.push(seriesElement)
        //seriesElement.data = dataarray
        //drillDownDataArry.push(drillDownData);
    }
    drillAll.series = series
    //console.log("drillDownData ", drillDownDataArry);
    //return drillDownDataArry;
    return drillAll;
}


    // Highcharts.chart('container', {
    //     chart: {
    //         type: 'pie'
    //     },
    //     title: {
    //         text: 'Glassdoor Review Sentiment Analysis '
    //     },
    //     subtitle: {
    //         text: 'Click the slices to view Categories. Source: <a href="http://glassdoor.com" target="_blank">glassdoor.com</a>'
    //     },
    //     plotOptions: {
    //         series: {
    //             dataLabels: {
    //                 enabled: true,
    //                 format: '{point.name}: {point.y:.1f}%'
    //             }
    //         }
    //     },

    //     tooltip: {
    //         headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    //         pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    //     },

    //     series: [
    //         {
    //             name: "Classification",
    //             colorByPoint: true,
    //             data: [
    //                 {
    //                     name: "Work/Life Balance",
    //                     y: 62.74,
    //                     drilldown: "Chrome"
    //                 },
    //                 {
    //                     name: "Culture & Values",
    //                     y: 10.57,
    //                     drilldown: "Firefox"
    //                 },
    //                 {
    //                     name: "Career Opportunities",
    //                     y: 7.23,
    //                     drilldown: "Internet Explorer"
    //                 },
    //                 {
    //                     name: "Compensation and Benefits",
    //                     y: 5.58,
    //                     drilldown: "Safari"
    //                 },
    //                 {
    //                     name: "Senior Management",
    //                     y: 4.02,
    //                     drilldown: "Edge"
    //                 },
    //                 {
    //                     name: "Current Employee - Anonymous Employee",
    //                     y: 1.92,
    //                     drilldown: "Opera"
    //                 }
    //             ]
    //         }
    //     ],
    //     drilldown: {

    //     }
    // });
//})