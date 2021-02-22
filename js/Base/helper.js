helper 			= JSON.parse(localStorage.helper);
helper_icon 	= $(".helper-icon");
helper_class 	= $(".help");
helper_title 	= $(".help-title");
helper_text 	= $(".help-txt");
helper_body 	= $(".help .desk-body")
close 			= $(".close-tab");
helperLeft 		= 0;
helperOffset 	= helper_body.offset();
helperLeft 		= helperOffset.left;
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

	menu_opening 	=false;
	helper_opening 	= true;
	slider 			= true;

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
	removing();
	helper_next();
});

back.click(()=>
{
	removing();
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
	helper_body.addClass("slideOutRight");
	helper_body.fadeOut(500);
	

	setTimeout(()=>
	{
		helper_body.removeClass("slideOutRight");
		helper_body.addClass("slideInLeft");
		helper_body.fadeIn();

		if(item_id < count_max)
			item_id++;		
		else
			item_id = 0;

		helper_start();	
	},500);
}
function helper_back()
{
	helper_body.addClass("slideOutLeft");
	helper_body.fadeOut(500);
	
	setTimeout(()=>
	{
		if(item_id > 0)
			item_id--;		
		else
			item_id = count_max;

		helper_start();	
		helper_body.removeClass("slideOutLeft");
		helper_body.addClass("slideInRight");
		helper_body.fadeIn();

	},500);
	
}

function removing(){
	
	helper_body.removeClass("slideInLeft");
	helper_body.removeClass("slideInRight");
	helper_body.removeClass("slideOutLeft");
	helper_body.removeClass("slideOutRight");
}


touching("helper");