$(function(){
    // Create the chart

Highcharts.chart('container', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Glassdoor Review Sentiment Analysis '
    },
    subtitle: {
      text: 'Click the slices to view Categories. Source: <a href="http://glassdoor.com" target="_blank">glassdoor.com</a>'
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y:.1f}%'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        name: "Classification",
        colorByPoint: true,
        data: [
          {
            name: "Work/Life Balance",
            y: 62.74,
            drilldown: "Chrome"
          },
          {
            name: "Culture & Values",
            y: 10.57,
            drilldown: "Firefox"
          },
          {
            name: "Career Opportunities",
            y: 7.23,
            drilldown: "Internet Explorer"
          },
          {
            name: "Compensation and Benefits",
            y: 5.58,
            drilldown: "Safari"
          },
          {
            name: "Senior Management",
            y: 4.02,
            drilldown: "Edge"
          },
          {
            name: "Current Employee - Anonymous Employee",
            y: 1.92,
            drilldown: "Opera"
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          name: "Work/Life Balance",
          id: "Chrome",
          data: [
            [
              "positive",
              30
            ],
            [
              "negative",
              60
            ],
            [
              "neutral",
              10
            ]
          ]
        },
        {
          name: "Firefox",
          id: "Firefox",
          data: [
            [
              "v58.0",
              1.02
            ],
            [
              "v57.0",
              7.36
            ],
            [
              "v56.0",
              0.35
            ],
            [
              "v55.0",
              0.11
            ],
            [
              "v54.0",
              0.1
            ],
            [
              "v52.0",
              0.95
            ],
            [
              "v51.0",
              0.15
            ],
            [
              "v50.0",
              0.1
            ],
            [
              "v48.0",
              0.31
            ],
            [
              "v47.0",
              0.12
            ]
          ]
        },
        {
          name: "Internet Explorer",
          id: "Internet Explorer",
          data: [
            [
              "v11.0",
              6.2
            ],
            [
              "v10.0",
              0.29
            ],
            [
              "v9.0",
              0.27
            ],
            [
              "v8.0",
              0.47
            ]
          ]
        },
        {
          name: "Safari",
          id: "Safari",
          data: [
            [
              "v11.0",
              3.39
            ],
            [
              "v10.1",
              0.96
            ],
            [
              "v10.0",
              0.36
            ],
            [
              "v9.1",
              0.54
            ],
            [
              "v9.0",
              0.13
            ],
            [
              "v5.1",
              0.2
            ]
          ]
        },
        {
          name: "Edge",
          id: "Edge",
          data: [
            [
              "v16",
              2.6
            ],
            [
              "v15",
              0.92
            ],
            [
              "v14",
              0.4
            ],
            [
              "v13",
              0.1
            ]
          ]
        },
        {
          name: "Opera",
          id: "Opera",
          data: [
            [
              "v50.0",
              0.96
            ],
            [
              "v49.0",
              0.82
            ],
            [
              "v12.1",
              0.14
            ]
          ]
        }
      ]
    }
  });
})