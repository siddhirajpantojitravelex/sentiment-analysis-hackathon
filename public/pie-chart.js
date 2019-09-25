//$(function () {
    // Create the chart
      var chartData = [];
    var options = {
        chart: {
            renderTo: 'container',
            type: 'pie'
        },
        series: [],
        drilldown: {}
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
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        //document.getElementById("demo").innerHTML = this.responseText;
        //console.log("chartData ", JSON.parse(this.responseText));  
        chartData = JSON.parse(this.responseText);  
        }
    };
    xhttp.open("GET", baseURL + "/chart", false);
    xhttp.send();

    $(document).ready(function() {
        console.log("chartData outside ", chartData);   
        console.log("chartData outside ", chartData[0]);   
        // chartData.forEach((item,index) => {
        //     options.series.push({
        //         name: "Classification",
        //         data: [item]
        //     })
        // });
            options.series.push({
                name: "Classification",
                data: getData()
            })
            //options.drilldown.seri
        var chart = new Highcharts.Chart(options);
        getDrillDownData();
    });

    function getData(){
        var dataArray = [];
        dataArr = [];
        for (let i = 0; i < chartData.length; i++){
            var name, data, drillData;
            name = chartData[i].name;
            data = chartData[i].value;
            drillData = {'name':name, 'y':data, "drilldown": "chart"+i}
            dataArr.push(drillData)
        }
        console.log("   dataArr",dataArr)
        return dataArr;
    }

    function getDrillDownData(){
        var drillDownDataArry = [], drillAll;
        for (let i = 0; i < chartData.length; i++){
            var dataarray = [];
            for (let j = 0; j < chartData[i].drilldown.length; j++){
                var data = [];
                data = [chartData[i].drilldown[j].sentiment, chartData[i].drilldown[j].value];
                dataarray.push(data);
            }
          
            drillDownData = {'id':"chart"+i, "data": dataarray}
            drillAll ={
                drilldown:{
                    series: drillDownData
                }
            }
            console.log(drillAll);
            //drillDownDataArry.push(drillDownData);
        }
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
    //         series: [
    //             {
    //                 name: "Work/Life Balance",
    //                 id: "Chrome",
    //                 data: [
    //                     [
    //                         "positive",
    //                         30
    //                     ],
    //                     [
    //                         "negative",
    //                         60
    //                     ],
    //                     [
    //                         "neutral",
    //                         10
    //                     ]
    //                 ]
    //             },
    //             {
    //                 name: "Culture & Values",
    //                 id: "Firefox",
    //                 data: [
    //                     [
    //                         "positive",
    //                         30
    //                     ],
    //                     [
    //                         "negative",
    //                         60
    //                     ],
    //                     [
    //                         "neutral",
    //                         10
    //                     ]
    //                 ]
    //             },
    //             {
    //                 name: "Career Opportunities",
    //                 id: "Internet Explorer",
    //                 data: [
    //                     [
    //                         "positive",
    //                         30
    //                     ],
    //                     [
    //                         "negative",
    //                         60
    //                     ],
    //                     [
    //                         "neutral",
    //                         10
    //                     ]
    //                 ]
    //             },
    //             {
    //                 name: "Compensation and Benefits",
    //                 id: "Safari",
    //                 data: [
    //                     [
    //                         "positive",
    //                         30
    //                     ],
    //                     [
    //                         "negative",
    //                         60
    //                     ],
    //                     [
    //                         "neutral",
    //                         10
    //                     ]
    //                 ]
    //             },
    //             {
    //                 name: "Senior Management",
    //                 id: "Edge",
    //                 data: [
    //                     [
    //                         "positive",
    //                         30
    //                     ],
    //                     [
    //                         "negative",
    //                         60
    //                     ],
    //                     [
    //                         "neutral",
    //                         10
    //                     ]
    //                 ]
    //             },
    //             {
    //                 name: "Current Employee - Anonymous Employee",
    //                 id: "Opera",
    //                 data: [
    //                     [
    //                         "positive",
    //                         30
    //                     ],
    //                     [
    //                         "negative",
    //                         60
    //                     ],
    //                     [
    //                         "neutral",
    //                         10
    //                     ]
    //                 ]
    //             }
    //         ]
    //     }
    // });
//})