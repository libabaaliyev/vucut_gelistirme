program_current = $(".current");
simple_program 	= $(".simple-program");
start_program 	= $(".start-program");
tr_program		= $(".training-program");
s_img_program 	= $(".s-img-program");
pr_count_html 	= $(".pr-count");
time_count_html	= $(".time-count");
start_tr_btn 	= $(".start-training-btn");
start_tr_ 		= $(".training-btn");
training_panel 	= $(".training");
controlClass 	= $(".controling");
timerClass		= $(".timer");
timer_txt 		= $(".timer-txt");
timer_percent 	= $(".timer-percent");

start_plan 		= 'program';
training_que 	= 0;
timer 			= 0;
timeFull 		= 0;
percent 		= 0;
cancel_training = 0;
add_info.click(()=>
{
	setting_info();
});

$(document).on('click', '.categories .item', function()
{
	tag 		= $(this).data("tag");
	start_plan	= 'open-plan';
	open_program(tag);
});

back_tab.click(()=>
{
	back_func(start_plan);

});


next_txt.click(()=>
{
	next_training("cancel-next");
});

start_tr_.click(()=>
{
	controlClass.hide();
	timerClass.show();
	start_plan = 'start-timer';
	start_timer();
});

start_tr_btn.click(()=>
{
	start_plan = 'start-training';
	controlClass.show();
	start_training();
});

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

function back_func(plan)
{console.log("back_func"+"-"+plan)
	if(plan == 'open-plan')
	{
		menu_start("program");
		back_tab			.hide();
		back_tab			.hide();
		simple_program		.hide();
		controlClass		.hide();
		timerClass			.hide();
		training_panel 		.hide();

		menu_icon			.show();
		helper_icon			.find("i").show();
		program_current		.show();
		start_plan 			= 'program';
		training_que 		= 0;
		timer 				= 0;
		timeFull 			= 0;
		percent 			= 0;
		cancel_training 	= 0;
				
	}
	else if(plan == "start-training")
	{
		training_panel.hide();
		simple_program.show();
		
		start_plan 			= 'open-plan';
		title 				.html(training_name);
		head_title			.html(training_name);
	}
	else if(plan == "start-timer")
	{
		clearTimeout(timerV);
		timerClass 		.hide();
		controlClass	.show();		
		timer_percent	.css("width",0);
		start_plan 		= 'start-training';
	}
}

function setting_programs()
{
	if(bodyType)
	{
		weightHTML.html(weight);
		heightHTML.html(height);

		if(bodyType == 'weak')
			bodyIndex = 8;
		else if(bodyType == 'normal-body')
			bodyIndex = 10;
		else
			bodyIndex = 12;


		timeFull = bodyIndex * 60;
		$(".add-info-block").hide();

		view_categories("programs",'without-button');

		$(".program").show();

	}
	else{
		$(".program").hide();
		$(".add-info-block").show();
	}

}

function open_program(tag)
{
	
	let data 			= training[tag];
	let data_c 			= find_categories(tag);
	let img 			= data_c['image_0'];
	training_name 		= translate_items[tag];
	menu_icon			.hide();
	helper_icon			.find("i").hide();
	program_current		.hide();
	
	back_tab			.show();
	back_tab			.show();
	simple_program		.show();	

	title 				.html(training_name);
	head_title			.html(training_name);
	s_img_program 		.attr("src",img);
	pr_count_html 		.html(data.length);

	time_training 		= data.length * bodyIndex;	
	let modul 			= time_training % 60;
	let floor 			= Math.floor(time_training / 60);
	
	if(time_training > 60){
		if(floor<10)
			x_floor = "0"+floor;
		else
			x_floor = floor;

		if(modul < 10)
			x_modul = "0"+modul;
		else
			x_modul = modul;

		time_count_html 	.html(x_floor + " : " + x_modul + " : 00");

	}
	else
		time_count_html 	.html(time_training + " : 00");

}

function start_training()
{
	let data 	= training[tag][training_que];
	let img 	= data['image'];
	let name 	= data['name'];
	let info 	= data['information'];

	head_title 	.html(name);
	training_info.html(info);
	$(".training-img").attr("src",img);

	simple_program.hide();
	training_panel.show();
}

function find_categories(tag)
{
	for (var i = 0; i < categories.length; i++) {
		
		if(tag == categories[i]['name']){
			return categories[i];
			break;
		}
		else
			if(i == ( categories.length - 1 ))
				notification("error-something");
	}
}

function start_timer()
{
	
	timerV = setTimeout(()=>{

		timer+=150;
		percent 		= (timer/timeFull) * 100;
		if(percent<=100)
		{
			let timerTxt 	=  timer + "/" + timeFull+"("+bodyIndex+" " + translate_items['minute'] + ")";
			timer_percent	.css("width",percent+"%");

			timer_txt		.html(timerTxt);
			start_timer();
		}
		else{

			start_alarm(alarm);
			next_training();
			back_func(start_plan);
		}
	},1000);
}

function next_training(e)
{
	timer 			= 0;
	percent 		= 0;
	start_txt		.html(translate_items['start']);
	if(e == "cancel-next")
		cancel_training ++;

	if(training_que == (training[tag].length - 1))
		finish(cancel_training);
	else
	{
		training_que ++;
		start_training();
		
	}
}


function finish(count)
{
	back_func("open-plan");

	if(training[tag].length == count)
		notification("do-not-training");
	else
		notification("success-training");
	
	
}

function calculate_fat(w,h)
{
	return w/(h/100*h/100);
}