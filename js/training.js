$(document).ready(function()
{
	base_			= "Base/base";
	base_menu		= "Base/menu";
	base_helper 	= "Base/helper";
	base_training 	= "Front/training";
	hash 			= location.hash.substr(1);

	jQuery.ajaxSetup({async:false});

	include(base_);	

	include(base_menu,	"menu_start","training");

	include(base_helper);

	include(base_training,"training_data",hash);

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