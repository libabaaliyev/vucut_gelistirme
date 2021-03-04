start_plan 		= 'program';
training_que 	= 0;
timer 			= 0;
timeFull 		= 0;
percent 		= 0;
cancel_training = 0;
training_count 	= 0;

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

	if(count){
		bodyIndex 		= count;
		timeFull 		= bodyIndex * 60;
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

start_tr_.click(()=>
{
	console.log(bodyIndex);

	controlClass	.hide();
	timerClass 		.show();
	start_plan 		= 'start-timer';
	start_timer();
});

start_tr_btn.click(()=>
{
	start_plan 		= 'start-training';
	controlClass 	.show();

	start_training();
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
	
	timerV = setTimeout(()=>{

		timer+=150;
		console.log(timer)
		percent 		= (timer / timeFull) * 100;
		if(percent<=100)
		{
			let timerTxt 	=  timer + "/" + timeFull+"("+bodyIndex+" " + translate_items['minute'] + ")";
			timer_percent	.css("width",percent+"%");

			timer_txt		.html(timerTxt);
			start_timer();
		}
		else{
			timer 			= 0;
			percent 		= 0;
			training_count ++;
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
		start_alarm(alarm,"play");
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
		timer 				= 0;		
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
		clearTimeout(timerV);
		timerClass 		.hide();
		controlClass	.show();		
		timer_percent	.css("width",0);
		start_plan 		= 'start-training';
	}
	else if(plan == "program")
	{
		console.log("plan")
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

	time_training 		= data.length * bodyIndex;	
	let modul 			= time_training % 60;
	let floor 			= Math.floor(time_training / 60);
	
	if(time_training > 60){
		if(floor<10)
			x_floor = "0" + floor;
		else
			x_floor = floor;

		if(modul < 10)
			x_modul = "0" + modul;
		else
			x_modul = modul;

		time_count_html 	.html(x_floor + " : " + x_modul + " : 00");

	}
	else
		time_count_html 	.html(time_training + " : 00");

}



function finish(count)
{
	back_func("open-plan");

	if(training[tag].length == count)
		notification("do-not-training");
	else{
		add_day();
		notification("success-training");
	}
	
	
}

function calculate_fat(w,h)
{
	return w/(h/100*h/100);
}