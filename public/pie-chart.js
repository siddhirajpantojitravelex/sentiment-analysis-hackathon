$(function () {
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
                    name: "Culture & Values",
                    id: "Firefox",
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
                    name: "Career Opportunities",
                    id: "Internet Explorer",
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
                    name: "Compensation and Benefits",
                    id: "Safari",
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
                    name: "Senior Management",
                    id: "Edge",
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
                    name: "Current Employee - Anonymous Employee",
                    id: "Opera",
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
                }
            ]
        }
    });
})