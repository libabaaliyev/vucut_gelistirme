start_plan 		= 'program';
training_que 	= 0;
timer 			= 40;


percent 		= 0;
cancel_training = 0;
training_count 	= 0;
repeat_time 	= 1;
timerV 			= 0;

weekClass.click(()=>
{
	openWeek 	= true;
	setting_week_info();
});

add_info.click(()=>
{
	setting_info();
});

$(document).on('click', '.categories .item', function()
{
	tag 				= $(this).data("tag");
	let count 			= $(this).data("count");
	start_plan			= 'open-plan';
	training_count 		= 0;
	timerFull 			= 0;
	timeStart 			= 0;
	timeFinish 			= 0;

	if(count){
		bodyIndex 		= count;
	}
	else
		info_bodyType();

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

start_tr_btn.click(()=>
{
	start_plan 		= 'start-training';
	controlClass 	.show();

	start_training();
});


start_tr_.click(()=>
{
	timeSet();	
	
	controlClass	.hide();
	training_info 	.hide();
	timerClass 		.show();
	repeat_count 	.show();
	start_plan 		= 'start-timer';
	
	timeStart 		= JSON.parse(date.getTime());

	//start_timer();
});


done.click(()=>
{
	timeSet();	
	
	$("#rest-timer").html(40);
	timeFinish = JSON.parse(date.getTime());

	timeFull = timeFinish - timeStart;

	console.log(timerFull)
	console.log(timeStart)
	console.log(timeFinish)

	if(training_que == (training[tag].length - 1))
		finish(cancel_training);
	else
	{
		add_day(training[tag][training_que]);
		training_count ++;
		
		c_training 					= training[tag][training_que+1];
		let img 					= c_training['image'];
		let name 					= c_training['name'];

		$("#steps") 				.html((training_que+2) + "/" + training[tag].length);
		$("#next-training-name") 	.html(name);
		$("#next-img")				.attr("src",img);

		start_timer();
		training_all 				.hide();
		rest		 				.show();

	}
	//next_training();
	//back_func(start_plan);
});

skip.click(()=>
{
	next_training();
	back_func(start_plan);
});

add_seconds.click(()=>
{
	timer+=20;

});

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

function start_timer()
{
	//timeFull yerine bodyIndex yaziriq, cunki artiq timer kimi yox tekrar sayi kimi istifade edecem	
	timerV = setTimeout(()=>{

		timer --;	
		
		if(timer > 0)
		{
			$("#rest-timer").html(timer);
			start_timer();
		}
		else{
			
			rest 			.hide();
			training_all	.show();
			start_alarm(alarm,"play");
			next_training();
			back_func(start_plan);
		}
	},repeat_time * 1000);
}

function next_training(e)
{
	timer 			= 40;
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

function back_func(plan)
{
	if(plan == 'open-plan')
	{
		simple_program		.hide();
		controlClass		.hide();
		timerClass			.hide();
		training_panel 		.hide();
		training_que 		= 0;
		timer 				= 40;		
		percent 			= 0;
		cancel_training 	= 0;
		start_plan 			= 'program';

		if(!openWeek)
		{
			menu_start("program");
			back_tab			.hide();
			back_tab			.hide();
			weekProgramList 	.hide();
			

			menu_icon			.show();
			helper_icon			.find("i").show();
			program_current		.show();
			
					
			setting_programs();
		}
		else
		{
			weekProgramList		.show();
			training_name 		= translate_items['week-txt'];
			title 				.html(training_name);
			head_title			.html(training_name);
		}
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
		if(timerV != 0)
			clearTimeout(timerV);

		repeat_count 	.hide();
		timerClass 		.hide();
		rest 			.hide();
		training_all	.show();
		controlClass	.show();
		training_info 	.show();		
		timer_percent	.css("width",0);
		start_plan 		= 'start-training';
	}
	else if(plan == "program")
	{
		if(openWeek)
		{
			openWeek 	= false;
			start_plan 	= 'open-plan';
			back_func (start_plan);
		}
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
	weekProgramList		.hide();
	
	back_tab			.show();
	back_tab			.show();
	simple_program		.show();	

	title 				.html(training_name);
	head_title			.html(training_name);
	s_img_program 		.attr("src",img);
	pr_count_html 		.html(data.length);

	time_training 		= data.length * bodyIndex * repeat_time;

	time_count_html 	.html("x" + bodyIndex);
	//time_all_training()

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