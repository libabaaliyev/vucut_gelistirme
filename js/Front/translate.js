function translate_words(e) {
	if(e == "training")
	{
		musc_title				.html(translate_items['musc-title']);
		how_title				.html(translate_items['how-title']);
		help_title				.html(translate_items['help-title']);
	}
	else if(e == "setting")
	{

		set_open_txt			.html(translate_items['open']);
		set_close_txt			.html(translate_items['close']);
		set_lang_txt			.html(translate_items['language']);
		set_sound_txt			.html(translate_items['sound']);
		set_confirm_txt			.html(translate_items['confirm']);
		set_reset_txt			.html(translate_items['reset']);
		$(".followus")			.html(translate_items['followus']);
	}

	else if(e == "program")
	{
		information_txt 		.html(translate_items['information']);
		weight_txt				.html(translate_items['weight-txt']);
		height_txt				.html(translate_items['height-txt']);
		day_txt					.html(translate_items['day-txt']);

		week_txt				.html(translate_items['week-txt']);
		form_body_txt			.html(translate_items['form-body']);

		if(!bodyType)
			body_info_txt 		.html(translate_items['not-info']);
		else
			body_info_txt 		.html(translate_items[bodyType]);
		
		add_info_txt			.html(translate_items['add-info-notf']);

		pr_count_txt			.html(translate_items['pr-count']);
		time_count_txt			.html(translate_items['time-count']);
		console.log(translate_items['start'])
		start_txt				.html(translate_items['start']);
		next_txt				.html(translate_items['next']);
	}
}
