google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Date', 'Score',{ role: 'style' }],
        ['05/07/2021', 90, 'color: #BDC581'],
        ['05/08/2021', 100,'color: #BDC581' ],
        ['05/09/2021', 110,'color: #BDC581' ],
        ['05/10/2021', 85,'color: #BDC581' ],
        ['05/11/2021', 94,'color: #BDC581' ]
      ]);

      var options = {
        title: 'Recent Scores',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Scores',
          minValue: 0
        },
        vAxis: {
          title: 'Dates'
        },
        colors: ['#BDC581']
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }