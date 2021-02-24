$(document).ready(function()
{
	base_			= "Base/base";
	base_menu		= "Base/menu";
	base_helper 	= "Base/helper";
	base_categories = "Front/categories";
	front_ 			= "Front/view";
	adsense_ 		= "Front/adsense"

	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");
	
	include(base_);	
	
	import_menu();
	
	import_helper();	

	include(base_menu,	"menu_start","training");

	include(base_helper);


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