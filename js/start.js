/*document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){*/
	
$(document).ready(function()
{
	let starting;
	let lang;

	words 			= getDatas('words');
	notifications 	= getDatas('notifications');

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
		
		appName 		= words[lang]['app-name'];

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
			      	console.log(words)
			      	$(".app-name").html(words[lang]['app-name']);
			      	$("title").html(words[lang]['app-name']);
			      	
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
/*}*/