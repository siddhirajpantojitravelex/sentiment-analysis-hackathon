$(function() {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: "container",
        type: "column",
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [{
        data: [4, 14, 18, 5, 6, 5]
      }, {
        data: [4, 14, 18, 5, 6, 5]
      }, {
        data: [4, 14, 18, 5, 6, 5]
      }],
      xAxis: {
        categories: [{
          categories: ["Apple", "Banana"]
        }, {
          categories: ["Carrot", "Potato"]
        }, {
          categories: ["Cod", "Salmon"]
        }]
      }
    });
  });
  