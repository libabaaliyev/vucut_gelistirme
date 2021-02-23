menu 			= JSON.parse(localStorage.menu);
lang 			= JSON.parse(localStorage.lang);
words 			= JSON.parse(localStorage.words);
categories 		= JSON.parse(localStorage.categories);
trainings 		= JSON.parse(localStorage.training);
translate_items = words[lang];
training 		= trainings[lang];

menu_opening 	= false;
helper_opening 	= false; 
slider 			= true;

menuPosLeft 	= 0;
helperPos 		= 0;
menuWidth 		= 150;
helperWidth 	= 300;
start_x 		= 0;
start_y 		= 0;
body 			= document.querySelector('body');
title 			= $("title");
head_title 		= $(".head-title");
next 			= $(".next");
back 			= $(".back");
loading			= $(".loading");

screenWidth 	= $("body").width();
scrollTop 		= 0;

$(window).scroll(function(e) {
  scrollTop = $(window).scrollTop();
});

function touching(including)
{
	body.addEventListener('touchstart',function(e)
	{
		touchPos = e.changedTouches[0];
		start_x1 = touchPos.pageX;
		start_y1 = touchPos.pageY;
		if(including == 'menu')
		{
			menu_collapse.removeClass("slideOutLeft");
			menu_collapse.removeClass("slideInLeft");
			
			if(!helper_opening)
			{
				if(start_x1>0 && start_x1<30 && scrollTop < 4 && scrollTop > -4)
					slider = true;
				else if(start_x1 < screenWidth && start_x1 > menuWidth && scrollTop < 4 && scrollTop > -4 && menu_opening)
					slider = true;
				else
					slider = false;
			}
		}
		if(including == 'helper')
		{
			moving_count = 0;
			/*if(helper_opening)
				helper_next()*/
		}

	});

	body.addEventListener('touchmove',function(e)
	{

		touchPos = e.changedTouches[0];
		start_x = touchPos.pageX;
		start_y = touchPos.pageY;
		
		if(including == 'menu')
		{
			if(slider && start_y>60)
			{
				if(!menu_opening && !helper_opening)
				{
					menuPosLeft = -1*(menuWidth - start_x); 

					if(start_x >= 0)
					{
						menu_collapse.css("left",menuPosLeft);
						menu_collapse.fadeIn();
						menu_darkness.fadeIn();
						menu_opening = false;

						if(menuPosLeft >= 0){
							
							menu_collapse.css("left",0);
							menu_opening 	= true;	
							slider 			= false;

						}				
						
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
		if(including == 'menu')
		{
			menu_collapse.removeClass("slideOutLeft");
			menu_collapse.removeClass("slideInLeft");

			if(slider && end_y > 60)
			{
				if(!menu_opening && !helper_opening)
				{
					if(start_x < menuWidth)
					{
						if(menuPosLeft  < 0){

							menuPosLeft = 0;
							
							menu_collapse.addClass("slideOutLeft");
							menu_darkness.fadeOut();
							menu_collapse.fadeOut();

						}
						else{
							
							menu_collapse.css("left",0);
							menu_opening 	= true;
						}
						
					}
				}


			}

			if(menu_opening && !helper_opening)
			{		
				if(moving<0)
					menu_();		
			}

			scrollTop = 0;
		}

		if(including == 'helper')
		{
			removing();
			if(helper_opening)
			{
				if(moving > 0)
					helper_next();					
				else if(moving < 0)
					helper_back();
				

			}
		}
	});

}

function random_number(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}