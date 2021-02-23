$(document).ready(function()
{
	let starting;
	let lang = 'az';

	words 			= getDatas('words');
	notifications 	= getDatas('notifications');
	menu 			= getDatas('menu');
	helper 			= getDatas('helper');
	categories 		= getDatas('categories');
	training 		= getDatas('training');
	const appName_ 	= 
	{
		"az" 	: "Vücud inkişaf rəhbəri",
		"tr"	: "Vücut geliştirme rehberi",
		"en" 	: "Bodybuilding guide",
		"ru" 	: "Гид по бодибилдингу"
	}

	if(localStorage.getItem("lang") === null){
		lang 		= 'az';
		starting 	= false;
	}
	else{
		lang 		= JSON.parse(localStorage.lang);
		starting 	= true;
	}
	
	start();
	
	function start()
	{
		
		appName 		= appName_[lang];

		console.log(appName)

		$(".app-name")	.html(appName);		
		$("title") 		.html(appName);

		if(!starting)
		{
			const { value: language } = Swal.fire({
			  title: 				'Select language',
			  input: 				'select',
			  backdrop: 			true,
			  allowOutsideClick: 	false,
			  allowEscapeKey: 		false,
			  inputOptions: {
			    
			      az: 'Azərbaycan dili',
			      tr: 'Türkçe',
			      en: 'English',
			      ru: 'Pусский'
			    
			  },
			  inputPlaceholder: 'Select anyone',
			  showCancelButton: false,
			  inputValidator: (value) => {
			    return new Promise((resolve) => {
			      if (value) {
			      	localStorage.lang 		= JSON.stringify(value);
			      	lang 					= localStorage.lang;
			      	
			      	appName 				= appName_[lang];

			      	$(".app-name").html(appName);
			      	$("title").html(appName);
			      	
			      	setTimeout(function()
					{
						Swal.close();
						window.location = "main.html";
					},500);


			      } else {

			        resolve('You must be select');
			      }
			    })
			  }
			});
		}
		else
		{
			setTimeout(function()
			{
				window.location = "main.html";
			},2000);
		}
	}

	function getDatas(event)
	{
		$.getJSON("json/"+event+".json", function(data){			
			localStorage.setItem(event,JSON.stringify(data));			
		});

		return JSON.parse(localStorage.getItem(event));	
	}

});