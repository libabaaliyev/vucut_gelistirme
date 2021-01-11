document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){

/*	
$(document).ready(function()
{	
	*/
	
	var tarix = new Date();
	var gun = tarix.getDate();
	var ay = tarix.getMonth()+1;
	var il = tarix.getFullYear();
	var saat = tarix.getHours();
	var deqiqe = tarix.getMinutes();
	var hefte = tarix.getDay();
	if(hefte==0)
	{
		hefte = 7;
	}

	var heftedongusu = gun-hefte;

	var gunsayi = JSON.parse(localStorage.getItem("gunsay"));
	var mesqgunsayi = JSON.parse(localStorage.getItem("mesqgunsay"));
	if(gunsayi===null)
	{
		gunsayi = [gun];
		mesqgunsayi = [];
		
		localStorage.gunsay = JSON.stringify(gunsayi);
		gunsayi = JSON.parse(localStorage.getItem("gunsay"));

		localStorage.mesqgunsay = JSON.stringify(mesqgunsayi);
		mesqgunsayi = JSON.parse(localStorage.getItem("mesqgunsay"));

	}

	if(gunsayi.indexOf(parseInt(gun)) < 0)
	{
		
		gunsayi.push(gun);
		localStorage.gunsay = JSON.stringify(gunsayi);
	}

	var gunsayi1 = gunsayi.length;
	var gunsayi2 = mesqgunsayi.length;

	$("#istifadegun").html(gunsayi2+"/"+gunsayi1);


	
	var mesq_update = JSON.parse(localStorage.getItem('mesq_update'));
	if(mesq_update===null)
	{
		mesq_update = [0];
		localStorage.mesq_update = JSON.stringify(mesq_update);
		mesq_update = JSON.parse(localStorage.getItem("mesq_update"));
	}


	updateyoxla();

	var versiya = '1.7.1';

	//update isleri
		function updateyoxla()
		{
			
				if(mesq_update.indexOf(parseInt(gun)) < 0)
				{
					$.post("http://elmtehsil/api/bodybuilding/data.php",
					{
						usern: "alibaba",
						bilgi: "1"

					},function(data,status)
					{
						
				        var obj = JSON.parse(data);
				        var versiya_x = obj.versiya;

				        if(versiya !=versiya_x)
				        {
				        	setTimeout(function()
				        	{
				        		$(".qaralti1").fadeIn();
				        		$(".rating").fadeIn();

				        		$("#sual").html("Eski sürüm kullanıyorsunuz. Lütfen güncelleyin.");
				        		$("#cavab").html("");
				        		$(".rate").html("Güncelle");
					        	
							},3000);
				        }
				      
					});
				}	
			
		}
		
		//qayidacam bura
		$("#later").click(function()
		{
			$(".qaralti1").fadeOut();
			$(".rating").fadeOut();
			if(mesq_update.indexOf(parseInt(gun)) < 0)
			{
				mesq_update.push(gun);
				localStorage.mesq_update = JSON.stringify(mesq_update);
			}
			
		});
	//update isleri

	//rate

		var rate_mesq = localStorage.getItem('rate_mesq');

		if(rate_mesq===null)
		{
			rate_mesq=0;
			rate_mesq = localStorage.setItem("rate_mesq",rate_mesq);

		}

		if(rate_mesq==0)
		{
			rate();
		}
		var s=0;
		function rate()
	    {
	    	s++;
	    	
	    	if(s==5&&rate_mesq==0)
	    	{
	    		s=0;
				
				$(".qaralti1").fadeIn();
        		$(".rating").fadeIn();

        		$("#sual").html("Beğendiniz mi?");
        		
        		$(".rate").html("Puan Ver");

        		$(".rate_right label").removeClass("sesver");
        		$(".rate_right label").addClass("sesver");
		    	
		    	
	    	}

	    	
	    	setTimeout(function(){rate();}, 120000); 
	    }
	    $(document).on('click', '.sesver', function()
	    {
	    	$(".qaralti1").fadeOut();
			$(".rating").fadeOut();

	    	rate_mesq=1;
			localStorage.setItem("rate_mesq",rate_mesq);

	    });

	//rate


	
	
	
	}
