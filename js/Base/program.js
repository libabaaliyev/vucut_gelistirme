start_plan 		= 'program';
training_que 	= 0;
timer 			= 40;
percent 		= 0;
cancel_training = 0;
training_count 	= 0;
repeat_time 	= 1;
timerV 			= 0;
lengthMax 		= 0;
lengthSet 		= 1;
doneTraining 	= 0;

weekClass.click(()=>
{
	openWeek 	= true;
	plan_week();
	//setting_week_info();
});

selectDay.click(function()
{
	start_plan 	= 'select-day';
	let day = $(this).data('day')
	wtxt = 'day-'+day;
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
		plan_data = find_plans(tag);

		if(plan_data == 'none')
			location.reload();
		else
		{
			set 		= plan_data['set'];
			trainings 	= plan_data['trainings'];
			lengthMax 	= trainings.length * set;	
		
		}
		bodyIndex 		= count;
	}
	else{
		lengthMax = (training[tag].length - 1);
		info_bodyType();
	}

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
	clickCount 		++;
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
	done_func();
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
	let t;
	let data;
	let module_t;
	if(openWeek){

		if(training_que>0)
			module_t = training_que % trainings.length;
		else
			module_t = 0;

		console.log("training_que: "+training_que+",module_t: "+module_t);

		t 		 = trainings[module_t];
		data 	 = training[tag][t];
	}
	else
		data 	= training[tag][training_que];	
	
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

	if(openWeek)
	{
		if(training_que == lengthMax)
			finish(cancel_training);
		else
		{
			if(!bannerShow)
			run_banner("bottom","show");
			training_que ++;
			start_training();	
		}
	}
	else
	{
		if(training_que == (lengthMax -1))
			finish(cancel_training)
		else
		{
			if(!bannerShow)
			run_banner("bottom","show");
			training_que ++;
			
			start_training();	
		}
	}

}

function back_func(plan)
{
	console.log(plan);
	if(plan == 'open-plan')
	{
		simple_program		.hide();
		controlClass		.hide();
		timerClass			.hide();
		training_panel 		.hide();
		weekSelect 			.hide();
		training_que 		= 0;
		doneTraining 		= 0;
		lengthSet 			= 1;
		timer 				= 40;		
		percent 			= 0;
		cancel_training 	= 0;

		if(openWeek)
			start_plan 		= 'select-day'
		else
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
			
			//set_name(training_name);
			setting_programs();
		
		}
		else
		{
			weekProgramList		.show();
			week_set();
		}
	}
	else if(plan == "start-training")
	{
		training_panel.hide();
		simple_program.show();
		start_plan 			= 'open-plan';
		
		set_name(training_name);
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
		else
			window.location = "main.html";
	}
	else if(plan == "select-day")
	{
		start_plan 	= 'program';
		weekProgramList		.hide();
		
		plan_week()
		
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

	set_name(training_name);

	s_img_program 		.attr("src",img);
	if(openWeek){
		pr_count_html 		.html(trainings.length);
		set_count_html 		.html(set);
		set_count_ 			.show();
	}
	else{
		pr_count_html 		.html(data.length);
		set_count_ 			.hide();
	}

	time_training 		= data.length * bodyIndex * repeat_time;

	time_count_html 	.html("x" + bodyIndex);


	//time_all_training()

}


function done_func(e)
{
	timeSet();	
	
	$("#rest-timer").html(40);

	timeFinish 	= JSON.parse(date.getTime());
	timeFull 	= timeFinish - timeStart;

	if(openWeek)
	{
		if(training_que == (lengthMax -1))			
			finish(cancel_training);
		else
			done_ok();
	}
	else
	{
		if(training_que == lengthMax)
			finish(cancel_training);
		else
			done_ok();
	}
	//next_training();
	//back_func(start_plan);
}

function done_ok()
{
	
	let t;
	let f;
	let data;
	let allT;
	let module_t;
	if(openWeek){
		module_t 	= training_que % trainings.length;
		t 			= trainings[module_t];
		if(module_t > (trainings.length - 2))
			module_t = -1;

		f 			= trainings[module_t + 1];
		
		data 		= training[tag][t];
		c_training 	= training[tag][f];
		allT 		= training_que + 2;	

		$("#steps") 				.html(allT + "/" + trainings.length * set);
	}
	else{
		data 		= training[tag][training_que];
		c_training 	= training[tag][training_que+1];

		$("#steps") .html((training_que+2) + "/" + training[tag].length);
	}

	run_banner("bottom","hide");
	run_banner("top","show");
	if(clickCount != 0 && clickCount % 3 == 0)
		run_interstitial();

	add_day(data);
	training_count ++;	
	
	let img 					= c_training['image'];
	let name 					= c_training['name'];

	
	$("#next-training-name") 	.html(name);
	$("#next-img")				.attr("src",img);

	start_timer();
	training_all 				.hide();
	rest		 				.show();

	doneTraining ++;
}

function finish(count)
{
	

	if(openWeek)
	{
		if(doneTraining == 0)
			notification("do-not-training");
		else if(count == 0)
			notification("success-training");
		else
			notification("not-full-training");
	}
	else
	{
		if(training[tag].length == count)
			notification("do-not-training");
		else
			notification("success-training");
	}
	
	back_func("open-plan");
	
}

function calculate_fat(w,h)
{
	return w/(h/100*h/100);
}