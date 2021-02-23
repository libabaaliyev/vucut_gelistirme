function training_data(tag) {
	
	let name 	= translate_items[tag];
	let data 	= training[tag];
	title 		.html(name);
	head_title	.html(name);
	

	for (var i = 0; i < data.length; i++) {
		let d 		= data[i];
		let name 	= d['name'];
		let img 	= d['image'];
		let info 	= d['information'];
		let help 	= d['help'];
		let muscle 	= d['musc'];


		create = `	<li>				
						<h4>` + name + `</h4>
					
						<img src="` + img + `">				
					</li>
				`

		$(create).appendTo("#trainings");
	}

}