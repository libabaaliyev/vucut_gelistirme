$(document).ready(function()
{
	week = JSON.parse(localStorage.training);

	document.write("chest"+"<br>")
	for (var i = 0; i < week['tr']['chest-musc'].length; i++) {
		x = week['tr']['chest-musc'][i];
		document.write('information: <br>' + x['information']+"<br>help: <br>"+ x['help']+"<br>musc: <br>"+x['musc']+"<br>");

	}

	document.write("arm"+"<br>")

	for (var i = 0; i < week['tr']['arm-musc'].length; i++) {
		x = week['tr']['arm-musc'][i];
		document.write('information: <br>' + x['information']+"<br>help: <br>"+ x['help']+"<br>musc: <br>"+x['musc']+"<br>");

	}

	document.write("shoulder"+"<br>")

	for (var i = 0; i < week['tr']['shoulder-musc'].length; i++) {
		x = week['tr']['shoulder-musc'][i];
		document.write('information: <br>' + x['information']+"<br>help: <br>"+ x['help']+"<br>musc: <br>"+x['musc']+"<br>");

	}

	document.write("back"+"<br>")

	for (var i = 0; i < week['tr']['back-musc'].length; i++) {
		x = week['tr']['back-musc'][i];
		document.write('information: <br>' + x['information']+"<br>help: <br>"+ x['help']+"<br>musc: <br>"+x['musc']+"<br>");

	}

	document.write("sixpack"+"<br>")

	for (var i = 0; i < week['tr']['sixpack-musc'].length; i++) {
		x = week['tr']['sixpack-musc'][i];
		document.write('information: <br>' + x['information']+"<br>help: <br>"+ x['help']+"<br>musc: <br>"+x['musc']+"<br>");

	}

	document.write("leg"+"<br>")

	for (var i = 0; i < week['tr']['leg-musc'].length; i++) {
		x = week['tr']['leg-musc'][i];
		document.write('information: <br>' + x['information']+"<br>help: <br>"+ x['help']+"<br>musc: <br>"+x['musc']+"<br>");

	}





})