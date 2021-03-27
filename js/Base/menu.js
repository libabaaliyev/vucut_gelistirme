menu_icon 		= $(".menu-icon");	
menu_collapse 	= $(".menu-collapse");
menu_darkness 	= $(".menu-darkness");
name_title 		= '';

menu_icon.click(function()
{	
	menu_();
});

menu_darkness.click(function()
{
	menu_();
});

$(document).on('click', '#share', function()
{
	share_func();

});

$(document).on('click', '#rate', function()
{
	window.location = app_url;
});


function menu_()
{
	menu_collapse.removeClass("slideOutLeft");
	menu_collapse.removeClass("slideInLeft");
	if(menu_opening){
		
		menu_collapse.addClass("slideOutLeft");
		slider 		 = true;
		menu_opening = false;
		menu_darkness.fadeOut();
		menu_collapse.fadeOut();	
		
	}
	else{
		menu_collapse.removeClass("slideOutLeft");
		menu_collapse.removeClass("slideInLeft");
		menu_collapse.css("left",0);
		slider 			= false;
		menu_opening 	= true;	
		menu_darkness.show();
		menu_collapse.show();
		
	}

	
}

function menu_start(e)
{
	$("#menu-collapse").html("");
	
	for (var i = 0; i < menu.length; i++) {
		
		let active 	= '';
		let sharing = '';
		name 		= menu[i]['name'];
		name_title 	= translate_items[e];
		head_title.	html(name_title);
		title.		html(name_title);

		if(name == e)
			active = 'active';


		if(name == 'share')
			sharing = 'share';
		else if(name == 'rate')
			sharing = 'rate';

		createMenu = 	`<li class="`+active+`" id="`+ sharing +`">
							<a href="` + menu[i]['url'] + `">
								<i class="` + menu[i]['icon'] + `"></i>
								<label>` + translate_items[name] + `</label>
							</a>
						</li>`;

		if(menu[i]['active'] == true)
			$(createMenu).appendTo("#menu-collapse");


	}
}

function share_func()
{
	console.log("share");

	var options = {
        message: translate_items['share-message'], 
        subject: translate_items['app-name'], 
        files: ['', ''],
        url: app_url,
        chooserTitle: translate_items['app-name']
    }
    var onSuccess = function (result) {    
    	notification("success-share");
    }
    var onError = function (msg) {
       	notification("error-something");
    }
    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
}


touching("menu");
