$(document).ready(function()
{
	base_			= "Base/base";
	front_ 			= "Front/view";
	page 			= "index";

	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");

	include(base_);

	include(categories_,"view_categories","training");	

	import_menu();

	include(notification_);

	include(menu__,	"menu_start","training");

	import_helper();
	
	include(helper_);	

	loading.hide();

	include(adsense_);

	include(events_)

	run_banner();


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