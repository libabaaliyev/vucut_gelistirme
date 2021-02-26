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
	$("#help p").html(help);
	$("#img-training").attr("src",img);
	$("#how-txt").html(info);

	menu_icon.hide();
	helper_icon.find("i").hide();
	$(".trainings").hide();
	back_tab.show();
	back_tab.show();
	$(".tabs").show();


});

back_tab.click(()=>
{
	$(".tabs").hide();
	back_tab.hide();
	helper_icon.find("i").show();
	menu_icon.show();
	$(".trainings").show();
	
	if(menu_opening)
		menu_();

	title 		.html(training_name);
	head_title	.html(training_name);

})

function training_data(tag) {
	
	training_name 	= translate_items[tag];
	let data 		= training[tag];
	title 		.html(training_name);
	head_title	.html(training_name);
	

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