timeSet();

day_chart 	= $("#days-chart");
month_chart = $("#months-chart");
year_chart 	= $("#years-chart");

yearsData 	= [0,12,15,46,0,7,12,0,12,15,46,1];

days 		= [];
daysData 	= [];
for (var i = 1; i <= calendarMonLength; i++) {
	days.push(i);
	dData = training_minutes(i,'minutes');
	daysData.push(dData);
	
}

		
if(localStorage.weekTraining){
	
	weekTraining 	= JSON.parse(localStorage.weekTraining);

	if(currentWeek < 3){
		if(weekTraining > 1 )
			weekTraining = 3;
		else
			weekTraining = 0;
	}
	
	else if(currentWeek >= 3 && currentWeek < 5){
		if(weekTraining > 1 )
			weekTraining = 4
		else
			weekTraining = 1;
	}

	else if(currentWeek >= 5){
		if(weekTraining > 1 )
			weekTraining = 5;
		else
			weekTraining = 2;
	}
	

	localStorage.weekTraining = weekTraining;
}
else
{
	if(currentWeek < 3)
		weekTraining = 0;

	else if(currentWeek >= 3 && currentWeek < 5)
		weekTraining = 1;

	else if(currentWeek >= 5)
		weekTraining = 2;


	localStorage.weekTraining 	= weekTraining;
}


if(!calendarCurDay){
	
	calendar[currentMonthQ]['days'][currentYear][currentDay] = [];
	traningDays = 0;
	save();
}
else
	traningDays 		= training_days_count(calendarYear); 

function add_day(e)
{
	let t_name 	= e.name
	let t_img 	= e.image;
	
	let aim = 
	{
		"training-name"		: t_name,
		"training-tag"		: tag,
		"training-que"		: training_que,
		"training-img"		: t_img,
		"training-repeat"	: bodyIndex,
		"training-time"		: timeFull
	}
	

	calendarCurDay.push(aim);
	save();
	traningDays 		= training_days_count(calendarYear);

}

function training_days_count(e)
{

	xx = 0;
	for (var i = 0; i < Object.keys(e).length; i++) {
	
		tdc = e[Object.keys(e)[i]];
		if(tdc.length > 0){

			xx++;
			
		}
		

		
		if(i == (Object.keys(e).length - 1)){
			return xx;
		}
	}
}

function training_minutes(e,m)
{
	let sumMinutes = 0;
	if(calendarYear[e])
	{
		if(calendarYear[e].length > 0)
		{
			for (var i = 0; i < calendarYear[e].length; i++) {
				sumMinutes += (calendarYear[e][i]['training-time'])/1000;
			}
		}
	}

	if(sumMinutes !=0 )
		sumMinutes = Number((sumMinutes/60).toFixed(2));


	return sumMinutes;

}

function time_all_training()
{
	
	let modul 			= time_training % 60;
	let floor 			= Math.floor(time_training / 60);
	
	if(time_training > 60){
		if(floor<10)
			x_floor = "0" + floor;
		else
			x_floor = floor;

		if(modul < 10)
			x_modul = "0" + modul;
		else
			x_modul = modul;

		time_count_html 	.html("00 : " + x_floor + " : " + x_modul);

	}
	else
		time_count_html 	.html("00 : 00 : " + time_training);
}

function timeSet()
{
	date  				= new Date();	
	currentYear			= date.getFullYear();
	currentMonthQ 		= date.getMonth();
	currentMonth 		= currentMonthQ + 1;
	currentDay 			= date.getDate();
	currentWeek 		= date.getDay();
	currentDate			= currentDay + "." + currentMonth + "." + currentYear;
	calendarMonth 		= calendar[currentMonthQ];
	calendarDays 		= calendarMonth['days'];
	calendarMonLength 	= calendarMonth['count'];
	calendarYear 		= calendarDays[currentYear];
	calendarCurDay 		= calendarYear[currentDay];
}
