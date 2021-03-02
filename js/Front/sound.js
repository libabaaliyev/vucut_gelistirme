buying				= new Audio("sounds/buying.mp3");
addgem				= new Audio("sounds/adding.wav");
error 				= new Audio("sounds/error.wav");
success 			= new Audio("sounds/success.mp3");
info 				= new Audio("sounds/info.mp3");
alarmX 				= new Audio();
alarms = 
[
	{
		"name"	: "Analog alarm clock",
		"url" 	: "analog-alarm-clock.wav"
	},
	{
		"name"	: "Cartoon alarm clock",
		"url" 	: "cartoon-alarm.wav"
	},
	{
		"name"	: "Futuristic alarm clock",
		"url" 	: "futuristic-alarm.wav"
	},
	{
		"name"	: "Gadget alarm clock",
		"url" 	: "gadget-alarm-loop.wav"
	},
	{
		"name"	: "Mango alarm clock",
		"url" 	: "mango-alarm.wav"
	},
	{
		"name"	: "One blast whistle alarm clock",
		"url" 	: "one-blast-whistle.wav"
	}
]


function start_alarm(e,action)
{
	if(action == "play")
	{
		alarmX = new Audio("sounds/alarms/" + e);
		if(sound == "open")
			alarmX.play();
	}
	else
		alarmX.pause();
}

function soundManager(e)
{
	if(sound == 'open')
		window[e].play();
}