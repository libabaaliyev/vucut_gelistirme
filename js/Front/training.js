
$(document).on('click', '.training-items', function()
{
	let tag 	= $(this).data("tag");
	let que 	= $(this).data("que"); 
	let data 	= training[tag][que];
	let name 	= data['name'];
	let img 	= data['image'];
	let info 	= data['information'];
	let help 	= data['help'];
	let muscle 	= data['musc'];

	title 		.html(name);
	head_title	.html(name);

	$("#musc p").html(muscle);
	$("#how p").html(info);
	$("#help p").html(help);
	$("#home img").attr("src",img);

	$(".tabs").show();
	$(".trainings").hide();

});

function training_data(tag) {
	
	let name 	= translate_items[tag];
	let data 	= training[tag];
	title 		.html(name);
	head_title	.html(name);
	

	for (var i = 0; i < data.length; i++) {
		let d 		= data[i];
		let name 	= d['name'];
		let img 	= d['image'];
		
		create = `	<li class="training-items" data-que = '` + i + `' data-tag="` + tag + `">				
						<h4>` + name + `</h4>
					
						<img src="` + img + `">				
					</li>
				`

		$(create).appendTo("#trainings");
	}

}