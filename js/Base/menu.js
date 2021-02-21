menu 			= JSON.parse(localStorage.menu);

menu_opening 	= false;
helper_opening 	= false; 
slider 			= true;
title 			= $("title");
head_title 		= $(".head-title");
menu_icon 		= $(".menu-icon");	
menu_collapse 	= $(".menu-collapse");
menu_darkness 	= $(".menu-darkness");
name_title 		= '';
menuPosLeft 	= 0;
menuWidth 		= screenWidth/2;
start_x 		= 0;
start_y 		= 0;




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
	
	if(menu_opening){
		menu_collapse.addClass("slideOutLeft");
		slider 		 = true;
		menu_opening = false;
		menu_darkness.hide();
		setTimeout(()=>
		{			
			menu_collapse.hide();
			menu_collapse.removeClass("slideOutLeft");

		},1000);
	}
	else{
		menu_collapse.css("left",0);
	
		menu_collapse.addClass("slideInLeft");
		slider 			= false;
		menu_opening 	= true;	
		menu_darkness.show();
		menu_collapse.show();
		setTimeout(()=>
		{
			menu_collapse.removeClass("slideInLeft");
		},1000);
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

		$(createMenu).appendTo("#menu-collapse");


	}
}

body.addEventListener('touchstart',function(e)
{
	touchPos = e.changedTouches[0];
	start_x1 = touchPos.pageX;
	start_y1 = touchPos.pageY;
	
	if(start_x1>0 && start_x1<30 && scrollTop < 4 && scrollTop > -4)
		slider = true;
	else if(start_x1 < screenWidth && start_x1 > menuWidth && scrollTop < 4 && scrollTop > -4 && menu_opening)
		slider = true;
	else
		slider = false;

});

body.addEventListener('touchmove',function(e)
{

	touchPos = e.changedTouches[0];
	start_x = touchPos.pageX;
	start_y = touchPos.pageY;
	if(slider && start_y>55)
	{
		if(!menu_opening && !helper_opening)
		{
			menuPosLeft = -1*(menuWidth - start_x); 

			if(start_x >= 0)
			{
				menu_collapse.css("left",menuPosLeft);
				menu_collapse.show();
				menu_darkness.show();
				menu_opening = false;

				if(menuPosLeft >= -5){
					menu_collapse.css("left",0);
					menu_opening 	= true;	
					slider 			= false;

				}
				else{
					slider 			= true;				
					menu_opening 	= false;					
				}
				
			}
		}
	}


	
});



body.addEventListener('touchend',function(e)
{
	touchPos 	= e.changedTouches[0];
	end_x 		= touchPos.pageX;
	end_y 		= touchPos.pageY;
	moving 		= end_x - start_x1;
	moving1		= end_y - start_y1;
	
	if(slider && start_y > 55)
	{
		if(!menu_opening && !helper_opening)
		{
			if(start_x < menuWidth)
			{
				if(menuPosLeft  < -5){

					menuPosLeft = 0;
					menu_collapse.addClass("slideOutLeft");

					setTimeout(()=>
					{
						menu_collapse.css("left",0);
						menu_darkness.hide();
						menu_collapse.hide();
						menu_collapse.removeClass("slideOutLeft");
					},300);
				}
				else
					menu_opening 	= true;
				
			}
		}
		else if(menu_opening && !helper_opening)
		{
			if(moving<0)
				menu_();		
		}
	}
	scrollTop = 0;

});

