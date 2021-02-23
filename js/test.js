$(document).ready(function()
{
	let json;
	$.getJSON("json/test.json", function(data){			
			
		json = data['leg-musc'];
		
		x = json.length;

		for (var i = 0; i < x; i++) {
			

			document.write(json[i]['name']+"<br><br>")
		}
	

	});



})