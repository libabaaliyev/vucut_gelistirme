$(document).ready(function()
{
	base_			= "Base/base";	
	front_ 			= "Front/view";
		
	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");

	include(base_);

	import_menu();

	include(adsense_);

	include(menu__,	"menu_start","statistic");

	import_helper();
	
	include(helper_);

	include(time_);

	include(graphics_);

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