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
        title: '',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Scores',
          minValue: 0
        },
        vAxis: {
          title: 'Dates'
        },
        colors: ['#BDC581'],
        backgroundColor: 'transparent'
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasicAp);

function drawBasicAp() {

      var dataAp = google.visualization.arrayToDataTable([
        ['Date', 'Score',{ role: 'style' }],
        ['05/07/2021', 39, 'color: #BDC581'],
        ['05/08/2021', 20,'color: #BDC581' ],
        ['05/09/2021', 27,'color: #BDC581' ],
        ['05/10/2021', 22,'color: #BDC581' ],
        ['05/11/2021',34,'color: #BDC581' ]
      ]);

      var optionsAp = {
        title: '',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Scores',
          minValue: 0,
          
        },
        vAxis: {
          title: 'Dates'
        },
        colors: ['#BDC581'],
        backgroundColor: 'transparent'
      };
      

      var chartAp = new google.visualization.BarChart(document.getElementById('chartAp_div'));

      chartAp.draw(dataAp, optionsAp);
    }