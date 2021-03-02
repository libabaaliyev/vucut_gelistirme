
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
		menu_darkness.fadeIn();
		menu_collapse.fadeIn();
		
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
        url: 'https://play.google.com/store/apps/details?id=com.alibabastudio.bodybuilding',
        chooserTitle: translate_items['app-name']
    }
    var onSuccess = function (result) {
        
        }
    var onError = function (msg) {
        /*alert("Paylaşım Hatası :" + msg);*/
    }
    window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
}


touching("menu");
