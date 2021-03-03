date  				= new Date();	
currentYear			= date.getFullYear();
currentMonthQ 		= date.getMonth();
currentMonth 		= currentMonthQ + 1;
currentDay 			= date.getDate();
currentDate			= currentDay + "." + currentMonth + "." + currentYear;
calendarMonth 		= calendar[currentMonthQ];
calendarDays 		= calendarMonth['days'];
calendarMonLength 	= calendarMonth['count'];
calendarYear 		= calendarDays[currentYear];
calendarCurDay 		= calendarYear[currentDay];
		
if(localStorage.weekTraining)
	weekTraining 	= JSON.parse(localStorage.weekTraining);
else
{
	weekTraining 				= 0;
	localStorage.weekTraining 	= weekTraining;
}


if(!calendarCurDay){
	
	calendar[currentMonthQ]['days'][currentYear][currentDay] = [];
	traningDays = 0;
	save();
}
else
	traningDays 		= training_days_count(calendarYear); 

function add_day()
{
	let aim = 
	{
		"training-name"		: tag,
		"training-time"		: timeFull*training_count
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
		
		if(i == (Object.keys(e).length - 1))
			return xx;
	}
}