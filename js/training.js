$(document).ready(function()
{
	base_			= "Base/base";
	base_menu		= "Base/menu";
	base_helper 	= "Base/helper";
	base_training 	= "Front/training";
	base_translate 	= "Front/translate";
	front_ 			= "Front/view";
	hash 			= location.hash.substr(1);

	if(!hash)
		window.location = "main.html";

	jQuery.ajaxSetup({async:false});

	include(front_,"import_topbar");

	include(base_);	

	import_menu();
	
	import_helper();

	include(base_menu,	"menu_start","training");

	include(base_helper);

	include(base_training,"training_data",hash);

	include(base_translate,"translate_words","training");

	loading.hide();

	function include(loc,func,funcData,funcData_1)
	{

		$.getScript("js/"+loc+".js",function(e)
		{
			if(func)			
				window[func](funcData,funcData_1);
		});
	}



});