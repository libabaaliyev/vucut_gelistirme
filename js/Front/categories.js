function view_categories(link,wb)
{
	$(".categories").html("");

	for (var i = 0; i < categories.length; i++) {

		let r_n 	= random_number(0,3);	
		let img 	= categories[i]['image_' + r_n];
		let tag 	= categories[i]['name'];
		let name 	= translate_items[tag];
		let btnCss 	= '';
		if(wb == "without-button")
			btnCss = 'd-none';

		create = `<div class="float-left w-100 bg-dark item mb-1" data-tag="`+ tag +`">
					<a class="item-img" href="`+ link +`.html#`+tag+`">
						<div class="darkness"></div>
						<img src="`+img+`">
					</a>
					<a class="item-name text-center text-decoration-none" href="`+ link +`.html#`+tag+`">
						<h4 class="text-light">` + name + `</h4>
					</a>

					<div class="item-button rounded `+ btnCss + `">
						<a class="btn btn-warning btn-go pl-3 pr-3" href="`+ link +`.html#`+tag+`">
							`+translate_items['go']+` <i class="fas fa-angle-right"></i>
						</a>
					</div>

				</div>`;
		$(create).appendTo(".categories");

	}
}