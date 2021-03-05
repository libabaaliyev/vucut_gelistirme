program_current 		= $(".current");
simple_program 			= $(".simple-program");
start_program 			= $(".start-program");
tr_program				= $(".training-program");
s_img_program 			= $(".s-img-program");
pr_count_html 			= $(".pr-count");
time_count_html			= $(".time-count");
start_tr_btn 			= $(".start-training-btn");
start_tr_ 				= $(".training-btn");
training_panel 			= $(".training");
controlClass 			= $(".controling");
timerClass				= $(".timer");
timer_txt 				= $(".timer-txt");
timer_percent 			= $(".timer-percent");
weekClass 				= $(".week");
weekProgramList 		= $(".week-program-list");
training_all 			= $(".training-all");
rest 					= $(".rest");
add_seconds 			= $("#add-seconds");
openWeek 				= false;


function setting_programs()
{
	daysHTML 	.html(traningDays + "/" + calendarMonLength);
	if(bodyType)
	{
		weightHTML	.html(weight);
		heightHTML	.html(height);

		info_bodyType();
		
		$(".add-info-block").hide();

		view_categories("programs",'without-button');

		$(".program")	.show();
		weekClass 		.show();

	}
	else
	{
		$(".program")		.hide();
		weekClass 			.hide();
		$(".add-info-block").show();
	}

}

function info_bodyType()
{
	if(bodyType == 'weak')
		bodyIndex = 8;
	else if(bodyType == 'normal-body')
		bodyIndex = 10;
	else
		bodyIndex = 12;	
}

function setting_week_info()
{
	program_current		.hide();
	menu_icon			.hide();
	helper_icon			.find("i").hide();
	program_current		.hide();
	
	back_tab			.show();
	back_tab			.show();
	weekProgramList		.show();

	training_name 		= translate_items['week-txt'];
	title 				.html(training_name);
	head_title			.html(training_name);
	let newData 		= [];
	let countDatas 		= [];
	wtxt 				= 'day-' + weekTraining;
	
	for (var i = 0; i < weekplan[wtxt].length; i++) {
		
		let tag 		= weekplan[wtxt][i]['name'];
		let count 		= weekplan[wtxt][i][bodyType];
		let items 		= find_categories(tag);
		
		countDatas 		.push(count);		
		newData			.push(items);

	}
	let allDatas = 
	{
		'cat' : newData,
		'count': countDatas
	}
	view_categories("programs",'without-button',allDatas);
}

function setting_info()
{
	Swal.fire({
		position				: 'center',
		title					: translate_items['weight-txt']+"("+translate_items['kg']+")",
		input					: 'number',
		showCancelButton		: false,
		confirmButtonText		: translate_items['next'] + ' &rarr;',
			
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
							showCancelButton		: false,	
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
											translate_words("program");
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