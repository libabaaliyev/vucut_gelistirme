$(document).ready(function()
{
	base_			= "Base/base";	
	front_ 			= "Front/view";
	page 			= "program";
	
	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");
	
	include(base_);	
	
	include(time_);

	include(adsense_);	

	import_menu();
	
	import_helper();	

	include(sound_);	

	include(menu__,	"menu_start","program");

	include(helper_);

	include(notification_);

	include(categories_);

	include(front_program,"setting_programs");

	include(translate_,"translate_words","program");

	include(base_program);

	include(events_);

	loading.hide();

	run_banner();


	function include(loc,func,funcData,funcData_1)
	{

		$.getScript("js/"+loc+".js",function(e)
		{
			if(func)			
				window[func](funcData,funcData_1);
		});
	}

});