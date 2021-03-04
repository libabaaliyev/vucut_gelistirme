
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
              tension: 0.3,
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

  
ofYears = new Chart(year_chart, {
    type: 'line',
    data: {
          labels: [translate_items['Jan'], translate_items['Feb'], translate_items['Mar'],translate_items['Apr'], translate_items['May'], translate_items['Jun'], translate_items['Jul'], translate_items['Aug'], translate_items['Sep'], translate_items['Oct'], translate_items['Nov'], translate_items['Dec']],
          type: 'line',
          datasets: [{
            data: yearsData,
            label: "say",
            backgroundColor: 'transparent',
            borderColor: 'rgba(0,0,0,.55)',
          }]
        },
    options: {

          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 1,
            intersect: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 12,
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
              tension: 0.3,
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


