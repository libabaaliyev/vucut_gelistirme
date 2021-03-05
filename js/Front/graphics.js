
ofMonths = new Chart(month_chart, {
    type: 'line',
    data: {
          labels: days,
          type: 'line',
          datasets: [{
            data: daysData,
            label: translate_items['minute'],
            backgroundColor: 'transparent',
            borderColor: 'rgba(0,0,0,.8)',
          }]
        },
    options: {

          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          tooltips: {
            titleFontSize: 16,
            bodyFontSize: 14,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff'
          },
          scales: 
          {
	            xAxes: [{
	              gridLines: {
	                color: 'transparent',
	                zeroLineColor: 'transparent'
	              },
	              ticks: {
	                fontSize: 0,
	                fontColor: '#000'
	              }
	            }],
	            yAxes: [{
	              display: true,
	              ticks: {
	                display: true,
	              }
	            }]
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              tension: 0.55,
              borderWidth: 3
            },
            point: {
              radius: 2,
              hitRadius: 2,
              hoverRadius: 2
            }
          }
        }
});




