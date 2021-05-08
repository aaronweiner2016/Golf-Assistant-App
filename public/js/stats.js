let golfData;
google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.load('current', { packages: ['corechart', 'bar'] });

async function apiCall() {
  const response = await fetch('/api/stats', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  golfData = await response.json();
  google.charts.setOnLoadCallback(drawBasic);
  google.charts.setOnLoadCallback(drawBasicAp);
}
apiCall();

function formatDate(dateToFormat) {
  const d = new Date(dateToFormat);
  const day = d.getDay() + 1;
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
}

function drawBasic() {
  const chartData = [['Date', 'Score', { role: 'style' }]];

  if (golfData && golfData.length > 0) {
    golfData.forEach((el) => {
      const { createdAt, totalScore } = el;
      const color = totalScore > 50 ? '#4ea64e' : '#BDC581';
      chartData.push([formatDate(createdAt), totalScore, `color: ${color}`]);
    });
    const data = google.visualization.arrayToDataTable(chartData);
    const options = {
      title: '',
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Scores',
        minValue: 0,
      },
      vAxis: {
        title: 'Dates',
      },
      colors: ['#BDC581'],
      backgroundColor: 'transparent',
    };

    const chart = new google.visualization.BarChart(
      document.getElementById('chart_div')
    );

    chart.draw(data, options);
  }
}

function drawBasicAp() {
  const chartData = [['Date', 'Score', { role: 'style' }]];
  if (golfData && golfData.length > 0) {
    golfData.forEach((el) => {
      const { createdAt, totalPutts } = el;
      const color = totalPutts > 50 ? '#567856' : '#BDC581';

      chartData.push([formatDate(createdAt), totalPutts, `color: ${color}`]);
    });

    const dataAp = google.visualization.arrayToDataTable(chartData);

    const optionsAp = {
      title: '',
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Scores',
        minValue: 0,
      },
      vAxis: {
        title: 'Dates',
      },
      colors: ['#BDC581'],
      backgroundColor: 'transparent',
    };

    const chartAp = new google.visualization.BarChart(
      document.getElementById('chartAp_div')
    );

    chartAp.draw(dataAp, optionsAp);
  }
}
