
menu_icon 		= $(".menu-icon");	
menu_collapse 	= $(".menu-collapse");
menu_darkness 	= $(".menu-darkness");
name_title 		= '';


menu_icon.click(function()
{	
	menu_();
});

menu_darkness.click(function()
{
	menu_();
});


function menu_()
{
	menu_collapse.removeClass("slideOutLeft");
	menu_collapse.removeClass("slideInLeft");
	if(menu_opening){
		
		menu_collapse.addClass("slideOutLeft");
		slider 		 = true;
		menu_opening = false;
		menu_darkness.fadeOut();
		menu_collapse.fadeOut();	
		
	}
	else{
		menu_collapse.removeClass("slideOutLeft");
		menu_collapse.removeClass("slideInLeft");
		menu_collapse.css("left",0);
		slider 			= false;
		menu_opening 	= true;	
		menu_darkness.fadeIn();
		menu_collapse.fadeIn();
		
	}

	
}

function menu_start(e)
{
	for (var i = 0; i < menu.length; i++) {
		
		let active 	= '';
		name 		= menu[i]['name'];
		name_title 	= translate_items[e];
		head_title.	html(name_title);
		title.		html(name_title);

		if(name == e)
			active = 'active';


		createMenu = 	`<li class="`+active+`">
							<a href="` + menu[i]['url'] + `">
								<i class="` + menu[i]['icon'] + `"></i>
								<label>` + translate_items[name] + `</label>
							</a>
						</li>`;

		if(menu[i]['active'] == true)
			$(createMenu).appendTo("#menu-collapse");


	}
}

touching("menu");
