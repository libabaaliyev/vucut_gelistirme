$(document).ready(function()
{
	base_			= "Base/base";
	front_ 			= "Front/view";
	page 			= "training";	

	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");

	include(base_);

	if(!hash)
		window.location = "main.html";

	include(adsense_);

	import_menu();
	
	import_helper();

	include(menu__,	"menu_start","training");

	include(helper_);

	include(training_,"training_data",hash);

	include(translate_,"translate_words","training");

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