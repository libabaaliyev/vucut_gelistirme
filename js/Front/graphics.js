/*
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

          maintainAspectRatio: true,
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
                  beginAtZero:true
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
});*/

count_workouts      = count_history(calendarYear,'workouts');
count_workouts_time = Math.round(count_history(calendarYear,'time'));

workouts_time       = time_convert(count_workouts_time) 

if(count_workouts > 0)
{
  if(currentDay == 1)
    $(".time-h").html(calendarMonthName + " " + currentDay)
  else
    $(".time-h").html(calendarMonthName + " 1 - " + currentDay)

  $(".count-workouts").html(count_workouts);
  $(".time-workouts").html(workouts_time);

  log_create(calendarYear);

}
else
{
  $(".history")   .hide();
  $(".not-result").show();
}

function log_create(e)
{
  for (var i = 0; i < Object.keys(e).length; i++) {
    
    let day     = Object.keys(e)[i];
    let tdc     = e[day];

    if(tdc.length > 0)
    {
      for (var x = 0; x < tdc.length; x++) {
        
        let item    = tdc[x];
        let img     = item['training-img'];
        let name    = item['training-name'];
        let time    = Math.floor(Math.round(item['training-time']/1000));
        let time_c  = time_convert(time);        
        let create  = `<div class="col-12"><a href="programs.html" class="text-decoration-none">
                        <div class="h-70px row border-bottom">
                          <div class="img-width-auto mr-2">
                            <img class="img-fluid" src="` + img + `">
                          </div>  
                          <div class="col-8">
                            <span class="m-0"><small class="text-muted text-12px">` + calendarMonthName +` ` + day +`</small></span>
                            <h6 class="m-0 text-dark text-14px"><b>` + name + `</b></h6>
                            <small class="text-12px"><i class="far fa-clock text-primary"></i> <span class="text-muted">` + time_c + `</span></small>
                          </div>
                        </div></a>
                      </div>`;

        $(create).appendTo(".logs");

      }
    }

  }
}

function count_history(e,v)
{
  let count_workouts = 0;

  for (var i = 0; i < Object.keys(e).length; i++) {
    

    tdc = e[Object.keys(e)[i]];

    if(tdc.length > 0){
      if(v == 'workouts')
        count_workouts += tdc.length;
      else if(v == 'time')
      {
        for (var x = 0; x < tdc.length; x++) {
          let time = tdc[x]['training-time'];
          count_workouts += Math.round(time/1000);
        }
      }
    }

  }

  return count_workouts;
}