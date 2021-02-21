for (var i = 0; i < categories.length; i++) {

	let r_n = random_number(0,3);	
	let img = categories[i]['image_' + r_n];
	let tag = categories[i]['name'];
	let name = translate_items[tag];


	create = `<div class="float-left w-100 bg-dark item mb-1">
				<div class="item-img">
					<div class="darkness"></div>
					<img src="`+img+`">
				</div>
				<div class="item-name text-center">
					<h4 class="text-light">` + name + `</h4>
				</div>

				<div class="item-button rounded">
					<a class="btn btn-warning btn-go pl-3 pr-3">
						`+translate_items['go']+` <i class="fas fa-angle-right"></i>
					</a>
				</div>

			</div>`;
	$(create).appendTo(".categories");

}