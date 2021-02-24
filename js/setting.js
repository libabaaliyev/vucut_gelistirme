$(document).ready(function()
{
	base_			= "Base/base";
	base_menu		= "Base/menu";
	base_helper 	= "Base/helper";
	base_setting	= "Base/setting";
	front_ 			= "Front/view";
	adsense_ 		= "Front/adsense";
	translate_ 		= "Front/translate";


	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");
	
	include(base_);

	include(translate_,"translate_words");

	include(base_setting);

	include(adsense_);

	import_menu();
	
	import_helper();	

	include(base_menu,	"menu_start","setting");

	include(base_helper);

	

	function include(loc,func,funcData,funcData_1)
	{

		$.getScript("js/"+loc+".js",function(e)
		{
			if(func)			
				window[func](funcData,funcData_1);
		});
	}
	setTimeout(function()
	{
		loading.hide();
	},200)
	
	//console.log( window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart);

});