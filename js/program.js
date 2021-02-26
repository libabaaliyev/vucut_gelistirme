$(document).ready(function()
{
	base_			= "Base/base";
	base_menu		= "Base/menu";
	base_helper 	= "Base/helper";
	base_categories = "Front/categories";
	base_program	= "Base/program";
	front_ 			= "Front/view";
	adsense_ 		= "Front/adsense"
	translate_ 		= "Front/translate";
	notification_ 	= "Front/notification";
	plan_ 			= "Base/plan";

	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");
	
	include(base_);	
	
	import_menu();
	
	import_helper();	

	include(base_menu,	"menu_start","program");

	include(translate_,"translate_words","program");

	include(base_helper);

	include(notification_);

	include(base_categories);

	include(plan_);

	include(base_program,"setting_programs");



	loading.hide();

	function include(loc,func,funcData,funcData_1)
	{

		$.getScript("js/"+loc+".js",function(e)
		{
			if(func)			
				window[func](funcData,funcData_1);
		});
	}

	//console.log( window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart);

});