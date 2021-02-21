helper 			= JSON.parse(localStorage.helper);
helper_icon 	= $(".helper-icon");
helper_class 	= $(".help");
helper_title 	= $(".help-title");
helper_text 	= $(".help-txt");
close 			= $(".close-tab");


helper_icon.click(()=>
{
	menu_icon.hide();
	helper_class.show();
	helper_icon.addClass("d-none");
	close.removeClass("d-none");
	
	head_title.		html(translate_items['helper']);

	count_max 		= helper[lang].length - 1;
	item_id			= random_number(0,count_max);

	if(menu_opening)
		menu_();	

	helper_opening 	= true; 
	helper_start();
});

close.click(()=>
{
	helper_opening 	= false; 
	menu_icon.show();
	helper_class.hide();
	close.addClass("d-none");
	helper_icon.removeClass("d-none");
	head_title.	html(name_title);
	
});

next.click(()=>
{
	helper_next();
});

back.click(()=>
{
	helper_back();
});

function helper_start()
{	
	helper_item 	= helper[lang][item_id];
	let name 		= helper_item['hlp_ttl'];
	let text 		= helper_item['hlp_txt'];
	
	helper_title. 	html(name);
	helper_text. 	html(text);
}

function helper_next()
{
	if(item_id < count_max)
		item_id++;		
	else
		item_id = 0;

	helper_start();	
}
function helper_back()
{
	if(item_id > 0)
		item_id--;		
	else
		item_id = count_max;

	helper_start();	
}
