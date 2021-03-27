$(document).ready(function()
{
	base_			= "Base/base";	
	front_ 			= "Front/view";	

	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");
	
	include(base_);
	
	include(sound_);

	include(time_);

	include(translate_,"translate_words","setting");

	include(notification_);

	include(adsense_);

	include(setting_);

	import_menu();
	
	import_helper();	

	include(menu__,	"menu_start","setting");

	include(helper_);

	run_banner();

	

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