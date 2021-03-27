document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown()
{
	if(page == "index")
		navigator.app.exitApp();
	else if(page == "training")
	{
		if(training_opening)
			back_training();
		else
			window.location = "main.html";
	}
	else if(page == "program")
		back_func(start_plan);
	else
		window.location = "main.html";
		
}