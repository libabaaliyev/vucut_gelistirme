add_info.click(()=>
{
	setting_info();
});



function setting_info()
{

	Swal.fire({
		position				: 'center',
		title					: translate_items['weight-txt']+"("+translate_items['kg']+")",
		input					: 'number',
		confirmButtonText		: translate_items['next'] + ' &rarr;',
		showCancelButton		: true,	
		inputValidator: (value) => {
		    return new Promise((resolve) => {
		    	if(value){
					weight = Number(value);

					if(weight>30&&weight<150)
					{

			    		Swal.fire({
							position				: 'center',
							title					: translate_items['height-txt']+"("+translate_items['sm']+")",
							input					: 'number',
							confirmButtonText		: translate_items['next'] + ' &rarr;',
							showCancelButton		: true,	
							inputValidator: (value) => {
							    return new Promise((resolve) => {
							    	if(value){
										height = Number(value);

										if(height>130&&height<250)
										{									

											fatting = calculate_fat(weight,height);										

											if(fatting<18.5)
												bodyType = "weak";
											
											else if(fatting>=18.5&&fatting<25)
												bodyType = "normal-body";
											
											else
												bodyType = "fat";										

											localStorage.weight 	= weight;
											localStorage.height 	= height; 
											localStorage.bodyType 	= bodyType;

											setting_programs();
											translate_words();
								    		notification('success-add-info',bodyType);

							    		}
										else
											resolve(notfs['wrong-height']['message']);

									} else {

							        resolve(notfs['empty-field']['message']);
							      }
							  	})
							}
						});
					}
					else
						resolve(notfs['wrong-weight']['message']);

				} else {

		        resolve(notfs['empty-field']['message']);
		      }
		  	})
		}
	});

}

function setting_programs()
{
	if(bodyType)
	{
		weightHTML.html(weight);
		heightHTML.html(height);
		$(".add-info-block").hide();

		view_categories("program",'without-button');

		$(".program").show();

	}
	else{
		$(".program").hide();
		$(".add-info-block").show();
	}
	

}

function calculate_fat(w,h)
{
	return w/(h/100*h/100);
}