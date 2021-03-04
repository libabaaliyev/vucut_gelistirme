$(document).ready(function()
{
	base_			= "Base/base";
	base_menu		= "Base/menu";
	base_helper 	= "Base/helper";
	time_ 			= "Base/time";
	base_categories = "Front/categories";
	front_ 			= "Front/view";
	graphics_ 		= "Front/graphics";
	adsense_ 		= "Front/adsense";
	charts 			= "Chart.bundle"

	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");

	include(base_);

	import_menu();

	include(base_menu,	"menu_start","training");

	import_helper();
	
	include(base_helper);

	include(time_);

	//include(charts);

	include(graphics_);

	loading.hide();

	include(adsense_);	

	function include(loc,func,funcData,funcData_1)
	{

		$.getScript("js/"+loc+".js",function(e)
		{
			if(func)			
				window[func](funcData,funcData_1);
		});
	}

});