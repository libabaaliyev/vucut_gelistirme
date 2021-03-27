
function find_categories(tag)
{
	for (var i = 0; i < categories.length; i++) {
		
		if(tag == categories[i]['name']){
			return categories[i];
			break;
		}
		else
			if(i == ( categories.length - 1 ))
				notification("error-something");
	}
}




function view_categories(link,wb,bs)
{
	
	append 			= 'categories';
	adding_count 	= '';

	if(bs)
	{
		categoriesX 	= bs.cat;
		counts 			= bs.count;
		append 			= 'plan-categories';
		
	}
	else
		categoriesX = categories;


	$("."+append).html("");

	for (var i = 0; i < categoriesX.length; i++) {

		let r_n 	= random_number(0,3);	
		let img 	= categoriesX[i]['image_' + r_n];
		let tag 	= categoriesX[i]['name'];
		let name 	= translate_items[tag];
		let btnCss 	= '';
		let adding_count	= '';
		if(wb == "without-button")
			btnCss = 'd-none';

		if(bs)
			adding_count = counts[i];

		create = `<div class="float-left w-100 bg-dark item mb-1" data-tag="`+ tag +`"  data-count="` + adding_count + `">
					<a class="item-img" href="` + link + `.html#` + tag + `">
						<div class="darkness"></div>
						<img src="` + img + `">
					</a>
					<a class="item-name text-center text-decoration-none" href="` + link + `.html#` + tag + `">
						<h4 class="text-light">` + name + `</h4>
					</a>
					<div class="item-button rounded ` + btnCss + `">
						<a class="btn btn-warning btn-go pl-3 pr-3" href="` + link + `.html#` + tag + `">
							` + translate_items['go'] + ` <i class="fas fa-angle-right"></i>
						</a>
					</div>
				</div>`;
		$(create).appendTo("."+append);

	}
}
