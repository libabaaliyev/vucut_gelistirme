$(document).ready(function()
{
	week = JSON.parse(localStorage.weekplan);

	w1 = 0;
	n1 = 0;
	f1 = 0;

	document.write("ayaq - " + control("leg-musc")+"<br>");
	
	document.write("sine - " + control("chest-musc")+"<br>");

	document.write("qol - " + control("arm-musc")+"<br>");

	document.write("ciyin - " + control("shoulder-musc")+"<br>");

	document.write("bel - " + control("back-musc")+"<br>");

	document.write("qarin - " + control("sixpack-musc")+"<br>");


	document.write("<br> <br>");

	document.write("weak - " + w1+"<br>");
	
	document.write("normal - " + n1+"<br>");

	document.write("fat - " + f1+"<br>");






	function control(e)
	{
		weak 	= 0;
		normal 	= 0;
		fat 	= 0;
		for (var i = 0; i < 6; i++) {
			
			for (var k = 0; k < week['day-'+i].length; k++) {
				
				y = week['day-'+i][k];

				if(y['name'] == e)
				{
					weak 	+= y['weak'];
					normal 	+= y['normal-body'];
					fat 	+= y['fat'];

					w1 	+= y['weak'];
					n1 	+= y['normal-body'];
					f1 	+= y['fat'];
				}


			}
			
			if(i == 5)
				return [weak,normal,fat];

		}
	}

})