
function view_categories(link,wb,bs)
{
	$(".categories").html("");
	append = 'categories';

	if(bs)
	{
		categoriesX = bs;
		append 		= 'plan-categories';
	}
	else
		categoriesX = categories;


	for (var i = 0; i < categoriesX.length; i++) {

		let r_n 	= random_number(0,3);	
		let img 	= categoriesX[i]['image_' + r_n];
		let tag 	= categoriesX[i]['name'];
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
		$(create).appendTo("."+append);

	}
}
